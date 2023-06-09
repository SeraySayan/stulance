import Image from 'next/image';
import ContractLogo from '/public/assets/contract_logo.png';
import StarRating from '../StarRating/StarRating';
export default function Contract({
    jobID,
    proposalID,
    customerReview,
    customerRating,
    freelancerReview,
    freelancerRating,
    startDate,
    dueDate,
    agreementText,
    price,
    freelancer,
}: {
    jobID: number;
    proposalID: number;
    price: number;
    startDate: string;
    dueDate: string;
    agreementText: string;
    customerReview: string;
    customerRating: number;
    freelancerReview: string;
    freelancerRating: number;
    freelancer: string;
}) {
    const date = new Date(startDate);
    startDate = date.toLocaleDateString();
    const date2 = new Date(dueDate);
    dueDate = date2.toLocaleDateString();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg text-red-500 text-center">CONTRACT</h3>
            <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-8 justify-between">
                    <Image src={ContractLogo} alt="Contract Logo" width={150} height={50} />
                    <div className="flex flex-col gap-2">
                        <p>Contract Job {jobID}</p>
                        <p>
                            Contract Proposal by <b>{freelancer.toUpperCase()}</b>
                        </p>
                        <p>Contract Price : ${price}</p>

                        <p>
                            Conract Start Date <time dateTime={startDate}>{startDate}</time>.
                        </p>

                        <p>
                            Contract Due Date : <time dateTime={dueDate}>{dueDate}</time>
                        </p>
                    </div>
                </div>
                <p>
                    <b>
                        <i>{agreementText}</i>
                    </b>
                </p>
                <div className="flex flex-col gap-2">
                    <p>Customer Review : {customerReview}</p>
                    <p className="flex items-center gap-3">
                        Customer Rate : <StarRating rating={customerRating} />
                    </p>
                    <p>Freelancer Review : {freelancerReview}</p>
                    <p className="flex items-center gap-3">
                        Freelancer Rate : <StarRating rating={freelancerRating} />
                    </p>
                </div>
            </div>
        </div>
    );
}
