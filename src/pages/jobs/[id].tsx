import { useRouter } from 'next/router';
import { use, useEffect, useState } from 'react';
import axios from 'axios';
import Proposal from '@/components/Proposal/Proposal';
import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Job from '@/components/Job/Job';
import { useAuth } from '@/contexts/AuthContext';

export default function JobProposal() {
    const router = useRouter();
    const { id } = router.query;
    const [job, setJob] = useState([]);
    const { accessToken } = useAuth();

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:8000/job/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((res) => {
                    console.log(id);
                    console.log('data', res.data);
                    setJob(res.data);
                    console.log(res.data);
                });
        }
    }, [id]);

    console.log(job);
    console.log(job.length);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <h1 className="text-center mb-40 text-[36px]">Job for Proposal</h1>
                {job &&
                    job.length > 0 &&
                    job.map((job: any) => (
                        <Job
                            key={job.proposal_id}
                            jobTitle={job.job_title}
                            jobDate={job.created_at}
                            description={job.job_description}
                            price={job.job_price}
                            customer={job.name + ' ' + job.surname}
                            cta={{ text: 'OK', href: `http://localhost:3000/myproposals` }}
                        />
                    ))}
            </Container>
        </div>
    );
}
