import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import FreelancerProposal from '@/components/FreelancerProposal/FreelancerProposal';
import { useAuth } from '@/contexts/AuthContext';
export default function MyProposals() {
    const [proposals, setProposals] = useState([]);
    const { accessToken } = useAuth();
    useEffect(() => {
        axios
            .get('http://localhost:8000/myproposals', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setProposals(res.data);
                console.log(res.data);
            });
    }, []);

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-[50px]">My Proposals</h1>
                    <div className="flex flex-col gap-10">
                        {proposals &&
                            proposals.map((proposal: any) => (
                                <FreelancerProposal
                                    key={proposal.proposal_id}
                                    proposalDescription={proposal.proposal_description}
                                    bid={proposal.proposal_bid}
                                    cta={{ text: 'View Job', href: `/jobs/${proposal.proposal_id}` }}
                                />
                            ))}
                        {proposals.length === 0 && (
                            <h1 className="text-center mb-40 text-[36px]">No proposals for this job</h1>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
