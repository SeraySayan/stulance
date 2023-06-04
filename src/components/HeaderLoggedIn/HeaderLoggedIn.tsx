import Image from 'next/image';
import OdtuLogo from '/public/assets/logo_metu.png';
import Link from 'next/link';
export default function HeaderLoggedIn() {
    return (
        <header className="border-b-2 border-red-500">
            <div className="px-10 py-5">
                <div className="flex justify-between item-center">
                    <div className="flex gap-5 items-center">
                        <Link href="/" className="flex items-center gap-5">
                            <Image src={OdtuLogo} width={100} height={100} alt="Picture of the logo" />
                            <span className="font-bold text-2xl">StuLance</span>
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link href="/customers">Customers</Link>
                        <Link href="/freelancers">Freelancers</Link>
                        <Link href="/contracts">Contracts</Link>
                        <Link href="/proposals">Proposals</Link>
                        <Link href="/jobs">Jobs</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
