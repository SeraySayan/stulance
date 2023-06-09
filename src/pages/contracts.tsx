import Contract from '@/components/Contract/Contract';
import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Contracts() {
    const [contracts, setContracts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/mycontracts').then((res) => {
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
            </Container>
        </div>
    );
}
