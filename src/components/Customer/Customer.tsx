import Image from 'next/image';
import CustomerIconLogo from '/public/assets/customer_icon.png';
export default function Customer({
    name,
    surname,
    country,
    jobDone,
    mail,
}: {
    name: string;
    surname: string;
    country: string;
    jobDone: number;
    mail: string;
}) {
    return (
        <div className="border-b-2">
            <div className="px-20 py-10">
                <div className="flex gap-16 justify-between items-center">
                    <div className=" max-w-[200px]">
                        <Image src={CustomerIconLogo} alt="Logo of the customer job" width={200} height={200} />
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
                            <p>
                                {name} {surname}
                            </p>
                            <p>{country}</p>
                            <p>{mail}</p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <b>{jobDone}</b> Job Done
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
