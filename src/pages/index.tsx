import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className="max-w-[1140px] mx-auto laptop:bg-red-500">
            <div className="flex gap-6">
                <div className="bg-white w-40 h-40"></div>
                <div className="bg-white w-40 h-40"></div>
                <div className="bg-white w-40 h-40"></div>
            </div>
            <div className="grid grid-cols-3 w-fit gap-6">
                <div className="bg-pink-400 w-40 h-40"></div>
                <div className="bg-pink-400 w-40 h-40"></div>
                <div className="bg-pink-400 w-40 h-40"></div>
            </div>
        </div>
    );
}
