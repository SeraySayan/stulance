import Image from 'next/image';
import JobLogo from '/public/assets/job_logo.png';
import Link from 'next/link';
export default function Job({
    jobTitle,
    jobDate,
    description,
    price,
    customer,
    cta,
}: {
    jobTitle: String;
    jobDate: string;
    customer: String;
    description: string;
    price: number;
    cta: { text: string; href: string };
}) {
    const date = new Date(jobDate);
    jobDate = date.toLocaleDateString();
    return (
        <div className="flex flex-col gap-4 justify-between mb-8 border-2 px-5 py-4 rounded-lg">
            <h3 className=" text-red-400 text-center">{jobTitle}</h3>
            <div className="flex gap-5 items-center justify-around">
                <Image src={JobLogo} alt="Job Logo" width={200} height={200} />
                <div className="flex flex-col gap-3">
                    <p>
                        Job Date: <time dateTime={jobDate}>{jobDate}</time>
                    </p>
                    <p>{description}</p>
                    <p>
                        <b>${price}/hours</b>
                    </p>
                    <p>
                        Released by <b>{customer.toUpperCase()}</b>
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
    );
}
