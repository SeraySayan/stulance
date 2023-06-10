import React, { use } from 'react';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import ProfileImage from '/public/assets/profile_img.jpg';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

type User = {
    name: string;
    surname: string;
    mail: string;
    country: string;
    posted_job_counter: number;
    skills: Array<string>;
};

export default function Profile() {
    const { userType, setUserType, accessToken } = useAuth();
    const [user, setUser] = useState<User>();
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/myprofile', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                console.log('res', res.data);
                setUser(res.data);
                console.log('seray', res.data);
            });
        console.log('seyan', user);
        console.log(userType);

        axios
            .get('http://localhost:8000/skills', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                console.log('skill', res.data);
                setSkills(res.data);
                console.log('skill', res.data);
            });
    }, [skills]);
    const [selectedSkill, setSelectedSkill] = useState('');

    const handleSkillChange = (e: any) => {
        setSelectedSkill(e.target.value);
    };
    const handlePostRequest = () => {
        // Perform post request with selectedSkill
        console.log(selectedSkill);
        axios
            .post(
                'http://localhost:8000/myskills',
                { skill_name: selectedSkill },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((response) => {
                // Handle successful response
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };
    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <div className="flex justify-between items-center">
                    <Image src={ProfileImage} width={200} height={200} alt="Profile Image" />
                    <div>
                        {userType === 'customer' && user && (
                            <div className="flex flex-col gap-8">
                                <h1 className="text-[50px]">CUSTOMER</h1>
                                <div>Name: {user.name} </div>
                                <div>Surname: {user.surname}</div>
                                <div>Mail: {user.mail}</div>
                                <div>Country: {user.country}</div>
                                <div>{user.posted_job_counter} Jobs Posted</div>
                            </div>
                        )}
                        {userType === 'freelancer' && user && (
                            <div className="flex flex-col gap-8">
                                <h1 className="text-[50px]">FREELANCER</h1>
                                <div>Name: {user.name} </div>
                                <div>Surname: {user.surname}</div>
                                <div>Mail: {user.mail}</div>
                                <div>Country: {user.country}</div>
                                <ul className="flex flex-col gap-2">
                                    {user.skills &&
                                        user.skills.map((skill: any) => (
                                            <li
                                                key={skill}
                                                className="bg-red-500 px-3 py-2 text-center rounded-lg text-white"
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                </ul>
                                <select
                                    id="skillDropdown"
                                    className="px-3 py-2 border-2 border-red-300 rounded-lg text-slate-400"
                                    value={selectedSkill}
                                    onChange={handleSkillChange}
                                >
                                    <option value="">Choose Skill</option>
                                    {skills &&
                                        skills.map((skill: any) => (
                                            <option key={skill.skill_id} value={skill.skill_id}>
                                                {skill.skill_name}
                                            </option>
                                        ))}
                                </select>
                                <Link href="/profile" onClick={handlePostRequest}>
                                    Add New Skill
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
