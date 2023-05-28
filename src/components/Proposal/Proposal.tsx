import Image from 'next/image';
import ProposalLogo from '/public/assets/proposal_logo.png';

export default function Proposal({ jobID, text, price }: { jobID: number; text: string; price: number }) {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-between mb-5">
                <h3 className=" text-red-400 text-center">PROPOSAL</h3>
                <div className="flex gap-5">
                    <Image src={ProposalLogo} alt="Proposal Logo" width={200} height={200} />
                    <div className="flex flex-col gap-3">
                        <p>Job : {jobID}</p>
                        <p>{text}</p>
                        <p>
                            $<b>{price}</b>hours
                        </p>
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
