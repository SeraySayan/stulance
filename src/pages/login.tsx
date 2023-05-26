import Header from '@/components/Header/Header';
import React from 'react';

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
            <Header displaySearch={false} />

            <div className="max-w-[1140px] mx-auto p-[100px]">
                <div className="border-2 border-red-300 rounded-lg px-5 py-4 flex flex-col gap-8">
                    <h1 className="text-center text-xl text-[40px]">Log in to StuLance</h1>
                    <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 px-5 py-4">
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
                        <button type="submit" className="bg-red-500 rounded-lg px-3 py-2 text-white text-lg">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
