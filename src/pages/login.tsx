import Header from '@/components/Header/Header';
import React from 'react';
import Image from 'next/image';
import SignUpImage from '/public/assets/sign_up_img.jpg';
import Container from '@/components/Container/Container';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { accessToken, setAccessToken } = useAuth();
    const { userType, setUserType } = useAuth();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    console.log('Email:' + email);
    console.log('Password:' + password);
    console.log('Token:' + accessToken);
    console.log('UserType:' + userType);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
        axios
            .post('http://localhost:8000/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAccessToken(res.data.token);
                setUserType(res.data.userType);
                router.push('/profile');
            })
            .catch((err) => {
                console.log(err);
                console.log('hata');
                window.alert('Email or password is wrong!');
            });
    };

    return (
        <>
            <Header display={{ search: false, login: false }} />

            <Container>
                <div className="relative">
                    <Image
                        src={SignUpImage}
                        alt="Cartoon Man Image"
                        width={200}
                        height={200}
                        className="absolute right-[-20px] top-[-20px] -rotate-[10deg] "
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
            </Container>
        </>
    );
}
