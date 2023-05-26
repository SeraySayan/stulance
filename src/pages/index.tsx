import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Freelancer from '@/components/Freelancer/Freelancer';
import Customer from '@/components/Customer/Customer';
import Contract from '@/components/Contract/Contract';
import Job from '@/components/Job/Job';
import Proposal from '@/components/Proposal/Proposal';
import Image from 'next/image';
import CarttonManImage from '/public/assets/landing_page_img.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />

            <div className="max-w-[1140px] mx-auto">
                <div className=" flex gap-5 justify-between items-center">
                    <div className="flex flex-col gap-8 max-w-[60%]">
                        <h2 className="text-[50px] text-red-500 font-bold">
                            Find the most suitable freelancers for your project.
                        </h2>
                        <p className="text-[28px] text-slate-600">
                            Throw out outdated guidelines. You could hire the top talent. Right now.
                        </p>
                        <a href="#" className="bg-red-500 text-center rounded-full px-4 py-3">
                            Get Started
                        </a>
                    </div>
                    <Image src={CarttonManImage} alt="Cartoon Man Image" width={200} height={200} />
                </div>
            </div>

            <div className="max-w-[1140px] mx-auto">
                <Freelancer />
                <Freelancer />
                <Freelancer />
            </div>
            <div className="max-w-[1140px] mx-auto">
                <Customer />
                <Customer />
                <Customer />
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Contract />
                <Contract />
                <Contract />
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Job />
                <Job />
                <Job />
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Proposal />
                <Proposal />
                <Proposal />
            </div>
        </>
    );
}
