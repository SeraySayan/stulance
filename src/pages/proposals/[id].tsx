import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Proposal from '@/components/Proposal/Proposal';
import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import { useAuth } from '@/contexts/AuthContext';

export default function JobProposal() {
    const router = useRouter();
    const { id } = router.query;
    const [proposals, setProposals] = useState([]);
    const { accessToken, setAccessToken } = useAuth();
    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:8000/proposal/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                .then((res) => {
                    console.log(id);
                    console.log('data', res.data);
                    setProposals(res.data);
                    console.log(res.data);
                });
        }
    }, [id]);

    console.log(proposals);
    console.log(proposals.length);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <h1 className="text-center mb-40 text-[36px]">Proposals for Job</h1>
                {proposals &&
                    proposals.length > 0 &&
                    proposals.map((proposal: any) => (
                        <Proposal
                            key={proposal.proposal_id}
                            jobID={proposal.job_id}
                            jobName={proposal.job_title}
                            text={proposal.proposal_description}
                            price={proposal.proposal_bid}
                            freelancer={proposal.name + ' ' + proposal.surname}
                            proposalDate={proposal.created_at}
                        />
                    ))}
                {proposals.length === 0 && <h1 className="text-center mb-40 text-[36px]">No proposals for this job</h1>}
            </Container>
        </div>
    );
}
