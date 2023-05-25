import Image from 'next/image';
import customerIconLogo from '/public/assets/customerIcon.png';
export default function Customer() {
    return (
        <div className="border-b-2 ">
            <div className="px-20 py-10">
                <div className="flex gap-16 justify-center items-start">
                    <div className="max-w-[30%]">
                        <Image
                            src={customerIconLogo}
                            alt="Logo of the customer job"
                            width={200}
                            height={200}
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex gap-4 flex-col max-w-[70%]">
                        <div className="flex gap-6">
                            <div>
                                <p>Dogu Cagri Ozarpaci</p>
                                <p>Web Developer</p>
                                <p>Spain</p>
                            </div>
                        </div>
                        <div>
                            <p>
                                <b>100</b> Job Done
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
