import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import axios from 'axios';
import React, { use, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

export default function SendProposal() {
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    const [proposalDescription, setProposalDescription] = React.useState('');
    const [proposalBid, setProposalBid] = React.useState('');
    const { accessToken, setAccessToken } = useAuth();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };
    const handleProposalDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProposalDescription(e.target.value);
    };
    const handleProposalBidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProposalBid(e.target.value);
    };
    const handleClick = () => {
        const proposalData = {
            proposal_description: proposalDescription,
            proposal_bid: Number(proposalBid),
            proposal_status: 'active',
        };

        axios

            .post(`http://localhost:8000/sendproposal/${id}`, proposalData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                // Handle successful response
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <div className="flex flex-col justify-between gap-10">
                    <h1 className="text-center text-[49px]">New Proposals</h1>
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-1/2 ">
                            <div className="flex  gap-10 items-center">
                                <label className="w-1/3">Proposal Description</label>
                                <input
                                    type="text"
                                    name="proposalDescription"
                                    id="proposalDescription"
                                    value={proposalDescription}
                                    placeholder="Proposal Description"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    required
                                    onChange={handleProposalDescriptionChange}
                                />
                            </div>
                            <div className="flex  gap-10 items-center">
                                <label className="w-1/3">Proposal Bid</label>
                                <input
                                    type="text"
                                    name="proposalBid"
                                    id="proposalBid"
                                    value={proposalBid}
                                    placeholder="Proposal Bid"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    required
                                    onChange={handleProposalBidChange}
                                />
                            </div>
                            <button
                                onClick={handleClick}
                                type="submit"
                                className="bg-red-500 rounded-lg max-w-full px-3 py-2 border-2 border-transparent text-white text-lg hover:bg-red-600 hover:border-2"
                            >
                                Release Proposal
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
