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
};

export default function Profile() {
    const { userType, setUserType } = useAuth();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        axios.get('http://localhost:8000/myprofile').then((res) => {
            setUser(res.data[0]);
            console.log('seray', res.data[0]);
        });
        console.log('seyan', user);
        console.log(userType);
    }, []);
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
                        {userType === 'freelancer' && (
                            <div>
                                <h1 className="text-[50px]">CUSTOMER</h1>
                                <div>Name: </div>
                                <div>Surname: </div>
                                <div>Mail: </div>
                                <div>Country: </div>
                                <div>2 Jobs Posted</div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
