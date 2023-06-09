import Image from 'next/image';
import ProposalLogo from '/public/assets/proposal_logo.png';

export default function Proposal({
    jobID,
    jobName,
    text,
    price,
    freelancer,
    proposalDate,
}: {
    jobID: number;
    jobName: string;
    text: string;
    price: number;
    freelancer: string;
    proposalDate: string;
}) {
    const date = new Date(proposalDate);
    proposalDate = date.toLocaleDateString();
    return (
        <div>
            <div className="flex flex-col gap-4 justify-between mb-5">
                <h3 className=" text-red-400 text-center">PROPOSAL</h3>
                <div className="flex gap-5">
                    <Image src={ProposalLogo} alt="Proposal Logo" width={200} height={200} />
                    <div className="flex flex-col gap-3">
                        <p>Job : {jobName}</p>
                        <p>Proposal Description: {text}</p>
                        <p>
                            Proposal Bid: $<b>{price}</b>hours
                        </p>
                        <p>
                            Proposal Date: <time dateTime={proposalDate}>{proposalDate}</time>
                        </p>
                        <p>Freelancer : {freelancer.toUpperCase()}</p>
                    </div>
                </div>
                <div className="text-center">
                    <a href="#" className=" text-center bg-yellow-300 py-2 px-3 rounded-full text-lg">
                        Go Chat
                    </a>
                </div>
            </div>
        </div>
    );
}
