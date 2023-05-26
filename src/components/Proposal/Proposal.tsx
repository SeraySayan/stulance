import Image from 'next/image';
import ProposalLogo from '/public/assets/proposal_logo.png';

export default function Proposal() {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-between mb-5">
                <h3 className=" text-red-400 text-center">PROPOSAL</h3>
                <div className="flex gap-5">
                    <Image src={ProposalLogo} alt="Proposal Logo" width={200} height={200} />
                    <div className="flex flex-col gap-3">
                        <p>Job : 1</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit sint ullam nihil
                            accusamus quod, voluptates ab, ea laborum soluta dolores quos ut harum. Vitae perspiciatis
                            quod in sapiente eligendi.
                        </p>
                        <p>
                            $<b>65</b>hours
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
