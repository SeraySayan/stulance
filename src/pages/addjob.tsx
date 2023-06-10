import React from 'react';
import Container from '@/components/Container/Container';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
export default function AddJob() {
    const [jobTitle, setJobTitle] = React.useState('');
    const [jobDescription, setJobDescription] = React.useState('');
    const [jobPrice, setJobPrice] = React.useState('');
    const { accessToken, setAccessToken } = useAuth();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('submit');
    };
    const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitle(e.target.value);
    };
    const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobDescription(e.target.value);
    };
    const handleJobPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobPrice(e.target.value);
    };

    const handleClick = () => {
        const jobData = {
            job_title: jobTitle,
            created_at: Date.now(),
            job_description: jobDescription,
            job_status: 'active',
            job_price: jobPrice,
        };

        axios
            .post('http://localhost:8000/job', jobData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                // Handle successful response
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };

    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <div className="flex flex-col justify-between gap-10">
                    <h1 className="text-center text-[49px]">Add New Job</h1>
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-1/2 ">
                            <div className="flex  gap-10 items- justify-start">
                                <label className="w-1/3">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    id="jobTitle"
                                    value={jobTitle}
                                    placeholder="Job Title"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    required
                                    onChange={handleJobTitleChange}
                                />
                            </div>
                            <div className="flex  gap-10 items-center">
                                <label className="w-1/3">Job Description</label>
                                <input
                                    type="text"
                                    name="jobDescription"
                                    id="jobDescription"
                                    value={jobDescription}
                                    placeholder="Job Description"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    required
                                    onChange={handleJobDescriptionChange}
                                />
                            </div>
                            <div className="flex  gap-10 items-center">
                                <label className="w-1/3">Job Price</label>
                                <input
                                    type="text"
                                    name="jobPrice"
                                    id="jobPrice"
                                    value={jobPrice}
                                    placeholder="Job Price"
                                    className="border-2 border-gray-300 rounded-md p-2"
                                    required
                                    onChange={handleJobPriceChange}
                                />
                            </div>
                            <button
                                onClick={handleClick}
                                type="submit"
                                className="bg-red-500 rounded-lg max-w-full px-3 py-2 border-2 border-transparent text-white text-lg hover:bg-red-600 hover:border-2"
                            >
                                Add Job
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
