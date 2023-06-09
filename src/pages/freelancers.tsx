import Freelancer from '@/components/Freelancer/Freelancer';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Freelancers() {
    const [freelancers, setFreelancers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/freelancers').then((res) => {
            setFreelancers(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                {freelancers &&
                    freelancers.map((freelancer: any) => (
                        <Freelancer
                            key={freelancer.user_id}
                            name={freelancer.name}
                            surname={freelancer.surname}
                            country={freelancer.country}
                            mail={freelancer.mail}
                            skills={freelancer.skills}
                        />
                    ))}
            </Container>
        </div>
    );
}
