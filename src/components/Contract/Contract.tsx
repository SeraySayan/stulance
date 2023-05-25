import Image from 'next/image';
import contractLogo from '/public/assets/contractLogo.png';
export default function Contract() {
    return (
        <div className="flex flex-col gap-5 ">
            <h3 className="text-lg text-red-500 text-center">CONTRACT</h3>
            <div className="flex flex-col gap-5 items-start">
                <div className="flex gap-8 justify-between">
                    <Image src={contractLogo} alt="contractLogo" width={100} height={100} />
                    <div className="flex flex-col gap-2">
                        <p>Contract Job 3</p>
                        <p>contract Proposal 1</p>
                        <p>Contract Date : 24.06.2000</p>
                        <p>Contract Due Date : 24.07.2000</p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi excepturi, autem facere porro unde
                    corrupti fugiat voluptas repellat neque at, i mpedit veritatis perferendis incidunt omnis! Ad
                    deleniti quod ea voluptatem.
                </p>
                <div className="felx flex-col gap-2 ">
                    <p>Customer Review : Lorem ipsum dolor sit amet.</p>
                    <p>Customer Rate : ☆☆☆☆☆</p>
                    <p>Freelancer Review : Lorem ipsum dolor sit amet.</p>
                    <p>Freelancers Rate : ☆☆☆☆☆</p>
                </div>
            </div>
        </div>
    );
}
