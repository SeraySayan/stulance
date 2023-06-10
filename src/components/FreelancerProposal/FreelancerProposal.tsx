import Image from 'next/image';
import ProposalLogo from '/public/assets/proposal_logo.png';
import Link from 'next/link';

export default function FreelancerProposal({
    proposalDescription,
    bid,
    cta,
}: {
    proposalDescription: string;
    bid: number;
    cta: { text: string; href: string };
}) {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-between mb-5">
                <h3 className=" text-red-400 text-center">PROPOSAL</h3>
                <div className="flex gap-5">
                    <Image src={ProposalLogo} alt="Proposal Logo" width={200} height={200} />
                    <div className="flex flex-col gap-3">
                        <p>Proposal Description: {proposalDescription}</p>
                        <p>
                            Proposal Bid: $<b>{bid}</b>hours
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        href={cta.href}
                        className=" text-center bg-yellow-300 py-2 px-3 rounded-full text-lg inline-block w-1/2"
                    >
                        {cta.text}
                    </Link>
                </div>
            </div>
        </div>
    );
}
