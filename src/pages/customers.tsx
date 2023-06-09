import Customer from '@/components/Customer/Customer';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/customers').then((res) => {
            setCustomers(res.data);
        });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                {customers &&
                    customers.map((customer: any) => (
                        <Customer
                            key={customer.user_id}
                            name={customer.name}
                            surname={customer.surname}
                            country={customer.country}
                            jobDone={customer.posted_job_counter}
                            mail={customer.mail}
                        />
                    ))}
            </Container>
        </div>
    );
}
