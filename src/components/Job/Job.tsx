import Image from 'next/image';
import JobLogo from '/public/assets/job_logo.png';
import Link from 'next/link';
export default function Job() {
    return (
        <div className="flex flex-col gap-4 justify-between mb-5">
            <h3 className=" text-red-400 text-center">JOB TITLE</h3>
            <div className="flex gap-5">
                <Image src={JobLogo} alt="Job Logo" width={200} height={200} />
                <div className="flex flex-col gap-3">
                    <p>
                        Job Date: <time dateTime="2023-05-26">May 26, 2023</time>
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit sint ullam nihil accusamus
                        quod, voluptates ab, ea laborum soluta dolores quos ut harum. Vitae perspiciatis quod in
                        sapiente eligendi.
                    </p>
                    <p>
                        <b>$65hours</b>
                    </p>
                </div>
            </div>
            <div className="text-center">
                <Link href="#" className=" text-center bg-yellow-300 py-2 px-3 rounded-full text-lg">
                    Hired me
                </Link>
            </div>
        </div>
    );
}
