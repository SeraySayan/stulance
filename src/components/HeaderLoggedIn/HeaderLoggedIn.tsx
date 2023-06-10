import Image from 'next/image';
import OdtuLogo from '/public/assets/logo_metu.png';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import axios from 'axios';
export default function HeaderLoggedIn() {
    const { userType, setUserType, accessToken, setAccessToken } = useAuth();
    console.log('UserType:' + userType);
    console.log('AccessToken:' + accessToken);

    const handleClick = () => {
        axios.post('http://localhost:8000/logout').then((res) => {
            console.log('fronetend', res);
        });
        setUserType(null);
        setAccessToken(null);
    };

    return (
        <header className="border-b-2 border-red-500">
            <div className="px-10 py-5">
                <div className="flex justify-between item-center">
                    <div className="flex gap-5 items-center">
                        <Link href="/profile" className="flex items-center gap-5">
                            <Image src={OdtuLogo} width={100} height={100} alt="Picture of the logo" />
                            <span className="font-bold text-2xl">StuLance</span>
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <Link href="/customers">Customers</Link>
                        <Link href="/freelancers">Freelancers</Link>
                        <Link href="/jobs">Jobs</Link>
                        {userType === 'customer' && <Link href="/myjobs">MyJobs</Link>}
                        <Link href="/contracts">MyContracts</Link>
                        {userType === 'freelancer' && <Link href="/myproposals">MyProposals</Link>}
                        <Link href="/" onClick={handleClick}>
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
