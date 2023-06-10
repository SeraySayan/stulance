import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Job from '@/components/Job/Job';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
export default function MyJobs() {
    const [jobs, setJobs] = useState([]);
    const { accessToken } = useAuth();
    useEffect(() => {
        axios
            .get('http://localhost:8000/myjobs', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setJobs(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <div className="flex flex-col justify-center">
                    {jobs &&
                        jobs.map((job: any) => (
                            <Job
                                key={job.job_id}
                                jobDate={job.created_at}
                                customer={job.name + ' ' + job.surname}
                                description={job.job_description}
                                price={job.job_price}
                                jobTitle={job.job_title}
                                cta={{ text: 'View Proposal', href: `/proposals/${job.job_id}` }}
                            />
                        ))}
                    <Link
                        href="/addjob"
                        className="px-3 py-2 border-2 border-red-300  rounded-full hover:shadow-md hover:border-red-600 text-center"
                    >
                        Add New Job
                    </Link>
                </div>
            </Container>
        </div>
    );
}
