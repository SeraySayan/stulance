import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import Freelancer from '@/components/Freelancer/Freelancer';
import Customer from '@/components/Customer/Customer';
import Contract from '@/components/Contract/Contract';
import Job from '@/components/Job/Job';
import Proposal from '@/components/Proposal/Proposal';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div>
            <Header></Header>
            <div className="max-w-[1140px] mx-auto">
                <Freelancer></Freelancer>
                <Freelancer></Freelancer>
                <Freelancer></Freelancer>
            </div>
            <div className="max-w-[1140px] mx-auto">
                <Customer></Customer>
                <Customer></Customer>
                <Customer></Customer>
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Contract></Contract>
                <Contract></Contract>
                <Contract></Contract>
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Job></Job>
                <Job></Job>
                <Job></Job>
            </div>
            <div className="max-w-[1140px] mx-auto py-5 border-b-2">
                <Proposal></Proposal>
                <Proposal></Proposal>
                <Proposal></Proposal>
            </div>
        </div>
    );
}
