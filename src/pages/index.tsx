import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Customer from '@/components/Customer/Customer';
import Contract from '@/components/Contract/Contract';
import Job from '@/components/Job/Job';
import Proposal from '@/components/Proposal/Proposal';
import Image from 'next/image';
import CarttonManImage from '/public/assets/landing_page_img.jpg';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />

            <div className="max-w-[1140px] mx-auto">
                <div className=" flex gap-5 justify-between items-center py-24">
                    <div className="flex flex-col gap-8 max-w-[70%]">
                        <h2 className="text-[60px] text-red-500 font-bold leading-[70px]">
                            Find the most suitable freelancers for your project.
                        </h2>
                        <p className="text-[28px] text-slate-600">
                            Throw out outdated guidelines. You could hire the top talent. Right now.
                        </p>
                        <Link
                            href="/signUp"
                            className="w-[50%] rounded-full px-8 py-2  bg-red-500 text-white text-lg font-bold text-center border-2 border-transparent hover:bg-red-600 hover:border-2 hover:shadow-md"
                        >
                            Get Start
                        </Link>
                    </div>
                    <Image src={CarttonManImage} alt="Cartoon Man Image" width={400} height={400} />
                </div>
                <div>
                    <div>
                        <Link href="/freelancers">Freelancer</Link>
                    </div>
                    <div>
                        <Link href="/customers">Customer</Link>
                    </div>
                    <div>
                        <Link href="/contracts">Contract</Link>
                    </div>
                    <div>
                        <Link href="/proposals">Proposal</Link>
                    </div>
                    <div>
                        <Link href="/jobs">Job</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
