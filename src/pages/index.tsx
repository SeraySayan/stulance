import { Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Image from 'next/image';
import CarttonManImage from '/public/assets/landing_page_img.jpg';
import Link from 'next/link';
import Container from '@/components/Container/Container';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <div className=" flex gap-5 justify-between items-center ">
                    <div className="flex flex-col gap-8 max-w-[70%]">
                        <h2 className="text-[60px] text-red-500 font-bold leading-[70px]">
                            Find the most suitable freelancers for your project.
                        </h2>
                        <p className="text-[28px] text-slate-600">
                            Throw out outdated guidelines. You could hire the top talent. Right now.
                        </p>
                        <Link
                            href="/signup"
                            className="w-[50%] rounded-full px-8 py-2  bg-red-500 text-white text-lg font-bold text-center border-2 border-transparent hover:bg-red-600 hover:border-2 hover:shadow-md"
                        >
                            Get Start
                        </Link>
                    </div>
                    <Image src={CarttonManImage} alt="Cartoon Man Image" width={400} height={400} />
                </div>
            </Container>
        </>
    );
}
