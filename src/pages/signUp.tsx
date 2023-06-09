import Header from '@/components/Header/Header';
import React from 'react';
import Image from 'next/image';
import SignUpImage from '/public/assets/sign_up_img.jpg';
import Container from '@/components/Container/Container';
export default function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    };
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };
    function validateForm() {
        return password === confirmPassword;
    }

    console.log('Email:' + email);
    console.log('Password:' + password);

    return (
        <>
            <Header
                display={{
                    search: false,
                    signUp: false,
                }}
            />
            <Container>
                <div className="relative">
                    <Image
                        src={SignUpImage}
                        alt="Cartoon Man Image"
                        width={200}
                        height={200}
                        className="absolute right-[-20px] top-[-20px] -rotate-[10deg]"
                    />
                    <div className="border-2 border-red-300 rounded-lg px-5 py-4 flex flex-col items-center gap-8">
                        <h1 className="text-center text-[40px] font-md mt-10">Sign up to StuLance</h1>
                        <form
                            action=""
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 px-5 py-4 w-[50%]  justify-center"
                        >
                            <input
                                type="text"
                                required
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={handleNameChange}
                                className="px-3 py-2 border-2 border-red-300 rounded-lg"
                            />
                            <input
                                type="text"
                                required
                                name="surname"
                                placeholder="Surname"
                                value={surname}
                                onChange={handleSurnameChange}
                                className="px-3 py-2 border-2 border-red-300 rounded-lg"
                            />
                            <input
                                type="text"
                                required
                                name="country"
                                placeholder="Country"
                                value={country}
                                onChange={handleCountryChange}
                                className="px-3 py-2 border-2 border-red-300 rounded-lg"
                            />

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
                            <input
                                type="password"
                                required
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="px-3 py-2 border-2 border-red-300 rounded-lg"
                            />
                            <select
                                id="userTypeDropdown"
                                className="px-3 py-2 border-2 border-red-300 rounded-lg text-slate-400"
                            >
                                <option value="">Choose User Type</option>
                                <option value="freelancer">Freelancer</option>
                                <option value="customer">Customer</option>
                            </select>

                            <button
                                type="submit"
                                className="bg-red-500 rounded-lg px-3 py-2 border-2 border-transparent text-white text-lg hover:bg-red-600 hover:border-2"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    );
}
