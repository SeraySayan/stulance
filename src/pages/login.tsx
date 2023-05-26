import Header from '@/components/Header/Header';
import React from 'react';
import Image from 'next/image';
import SignUpImage from '/public/assets/sign_up_img.jpg';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    console.log('Email:' + email);
    console.log('Password:' + password);

    return (
        <div>
            <Header displaySearch={false} displayLogin={false} />

            <div className="max-w-[1140px] mx-auto p-[100px] relative">
                <Image
                    src={SignUpImage}
                    alt="Cartoon Man Image"
                    width={200}
                    height={200}
                    className="absolute right-0 top-10 -rotate-[10deg] "
                />
                <div className="border-2 border-red-300 rounded-lg px-5 py-4 flex flex-col items-center">
                    <h1 className="text-center text-[40px] font-md mt-10">Log in to StuLance</h1>
                    <form
                        action=""
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5 px-5 py-4 w-[50%] h-[400px] justify-center"
                    >
                        <input
                            type="text"
                            required
                            name="email"
                            placeholder="Email or Username"
                            value={email}
                            onChange={handleEmailChange}
                            className="px-3 py-2 border-2 border-red-300 rounded-lg"
                        />
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="px-3 py-2 border-2 border-red-300 rounded-lg"
                        />
                        <button
                            type="submit"
                            className="bg-red-500 rounded-lg px-3 py-2 border-2 border-transparent text-white text-lg hover:bg-red-600 hover:border-2"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
