import Image from 'next/image';
import freelancerJobLogo from '/public/assets/freelancerJobIcon.png';
export default function Freelancer() {
    return (
        <div className="border-b-2 ">
            <div className="px-20 py-10">
                <div className="flex gap-8 justify-between items-center">
                    <div className="max-w-[30%]">
                        <Image
                            src={freelancerJobLogo}
                            alt="Logo of the freelancer job"
                            width={200}
                            height={200}
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex gap-4 flex-col max-w-[35%]">
                        <div className="flex gap-6">
                            <div>
                                <p>Seray Sayan</p>
                                <p>Web Developer</p>
                                <p>Turkey</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <b>88</b> Job Done
                            </p>
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-1 max-w-[35%]">
                            <li className="px-3 py-2 bg-red-300 rounded-lg text-center  ">Javascript</li>
                            <li className="px-3 py-2 bg-red-300 rounded-lg text-center ">C#</li>
                            <li className="px-3 py-2 bg-red-300 rounded-lg text-center ">Web Development</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
