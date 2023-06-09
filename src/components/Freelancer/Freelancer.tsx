import Image from 'next/image';
import freelancerJobLogo from '/public/assets/freelancerJobIcon.png';
import { useState } from 'react';
export default function Freelancer({
    name,
    surname,
    country,
    mail,
    skills,
}: {
    name: string;
    surname: string;
    country: string;
    mail: string;
    skills: string[];
}) {
    return (
        <div className="border-b-2 ">
            <div className="px-20 py-10">
                <div className="flex gap-8 justify-between items-center">
                    <div className="max-w-[30%]">
                        <Image
                            src={freelancerJobLogo}
                            alt="Logo of the freelancer job"
                            width={200}
                            height={200}
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex gap-4 flex-col max-w-[35%]">
                        <div className="flex gap-6">
                            <div>
                                <p>
                                    {name} {surname}
                                </p>
                                <p>{country}</p>
                                <p>{mail}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-1 max-w-[35%]">
                            {skills.map((skill) => (
                                <li key={skill} className="px-3 py-2 bg-red-300 rounded-lg text-center ">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
