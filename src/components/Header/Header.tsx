import Image from 'next/image';
import odtuLogo from '/public/assets/logoMetu.png';
import Link from 'next/link';

export default function Header({
    displaySearch = true,
    displayLogin = true,
    displaySignUp = true,
}: {
    displaySearch?: boolean;
    displayLogin?: boolean;
    displaySignUp?: boolean;
}) {
    return (
        <header className="border-b-2 border-red-500">
            <div className="px-10 py-5">
                <div className="flex justify-between item-center">
                    <div className="flex gap-5 items-center">
                        <Link href="/" className="flex items-center gap-5">
                            <Image src={odtuLogo} width={100} height={100} alt="Picture of the logo" />
                            <span className="font-bold text-2xl">StuLance</span>
                        </Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        {displaySearch ? (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="px-3 py-2 border-2 border-red-300 rounded-full hover:shadow-md hover:border-red-600"
                                    onChange={(e) => console.log(e.target.value)}
                                />
                            </div>
                        ) : (
                            <></>
                        )}

                        {displayLogin ? (
                            <div>
                                <Link
                                    href="/login"
                                    className="inline-block w-[200px] rounded-full px-6 py-2 font-bold text-center text-lg border-2 border-transparent hover:border-red-600 hover:shadow-md"
                                >
                                    Log In
                                </Link>
                            </div>
                        ) : (
                            <></>
                        )}

                        {displaySignUp ? (
                            <div>
                                <Link
                                    href="/signUp"
                                    className="inline-block w-[200px] rounded-full px-8 py-2  bg-red-500 text-white text-lg font-bold text-center border-2 border-transparent hover:bg-red-600 hover:border-2 hover:shadow-md"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
