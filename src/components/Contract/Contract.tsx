import Image from 'next/image';
import ContractLogo from '/public/assets/contract_logo.png';
import StarRating from '../StarRating/StarRating';
export default function Contract() {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg text-red-500 text-center">CONTRACT</h3>
            <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-8 justify-between">
                    <Image src={ContractLogo} alt="Contract Logo" width={150} height={50} />
                    <div className="flex flex-col gap-2">
                        <p>Contract Job 3</p>
                        <p>contract Proposal 1</p>
                        <p>Contract Price : $100</p>
                        <p>Contract Hours : 100</p>

                        <p>
                            Conract Date <time dateTime="2023-05-26">May 26, 2023</time>.
                        </p>

                        <p>
                            Contract Due Date : <time dateTime="2023-06-26">June 26, 2023</time>
                        </p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi excepturi, autem facere porro unde
                    corrupti fugiat voluptas repellat neque at, i mpedit veritatis perferendis incidunt omnis! Ad
                    deleniti quod ea voluptatem.
                </p>
                <div className="flex flex-col gap-2">
                    <p>Customer Review : Lorem ipsum dolor sit amet.</p>
                    <p className="flex items-center gap-3">
                        Customer Rate : <StarRating rating={5} />
                    </p>
                    <p>Freelancer Review : Lorem ipsum dolor sit amet.</p>
                    <p className="flex items-center gap-3">
                        <StarRating rating={6} />
                    </p>
                </div>
            </div>
        </div>
    );
}
