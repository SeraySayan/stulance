import Contract from '@/components/Contract/Contract';
import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
export default function Contracts() {
    const [contracts, setContracts] = useState([]);
    const { accessToken } = useAuth();
    useEffect(() => {
        axios
            .get('http://localhost:8000/mycontracts', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setContracts(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                {contracts &&
                    contracts.map((contract: any) => (
                        <Contract
                            key={contract.contract_id}
                            jobID={contract.job_id}
                            proposalID={contract.proposal_id}
                            price={contract.proposal_bid}
                            startDate={contract.start_date}
                            dueDate={contract.due_date}
                            agreementText={contract.agreement_text}
                            customerReview={contract.customer_review}
                            customerRating={contract.customer_rating}
                            freelancerReview={contract.freelancer_review}
                            freelancerRating={contract.freelancer_rating}
                            freelancer={contract.name + ' ' + contract.surname}
                        />
                    ))}
                {contracts.length === 0 && <h1 className="text-center mb-40 text-[36px]">No contracts</h1>}
            </Container>
        </div>
    );
}
