import Job from '@/components/Job/Job';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/jobs').then((res) => {
            setJobs(res.data);
            console.log(res.data);
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
                            cta={{ text: 'Apply', href: '#' }}
                        />
                    ))}
            </Container>
        </div>
    );
}
