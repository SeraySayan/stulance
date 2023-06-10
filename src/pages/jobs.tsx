import Job from '@/components/Job/Job';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const { userType } = useAuth();
    useEffect(() => {
        axios.get('http://localhost:8000/jobs').then((res) => {
            setJobs(res.data);
            console.log(res.data);
            console.log('seray' + userType);
        });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                {jobs &&
                    jobs.map((job: any) => (
                        <Job
                            key={job.job_id}
                            jobDate={job.created_at}
                            customer={job.name + ' ' + job.surname}
                            description={job.job_description}
                            price={job.job_price}
                            jobTitle={job.job_title}
                            cta={{ text: 'Apply', href: `/sendproposal/${job.job_id}` }}
                        />
                    ))}
            </Container>
        </div>
    );
}
