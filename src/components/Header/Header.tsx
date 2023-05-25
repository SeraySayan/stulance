import Image from 'next/image';
import odtuLogo from '/public/assets/logoMetu.png';

export default function Header() {
    return (
        <div className="border-b-2 border-red-500 ">
            <div className="px-10 py-5">
                <div className="flex justify-between item-center">
                    <div className="flex gap-5 items-center">
                        <div className="flex flex-col items-center gap-2">
                            <Image src={odtuLogo} width={100} height={100} alt="Picture of the logo" />
                            <span className="font-bold">StuLance</span>
                        </div>
                        <div className="flex gap-5 ">
                            <span>About</span>
                            <span>Find Work</span>
                            <span>Find Talent</span>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div>
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-3 py-2 border-2 border-red-300 rounded-full"
                            />
                        </div>
                        <div>
                            <a href="#" className="inline-block rounded-full px-3 py-2">
                                Log In
                            </a>
                        </div>
                        <div>
                            <a href="#" className="inline-block px-3 py-2 rounded-full bg-red-300">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
