import Image from 'next/image';
import CustomerIconLogo from '/public/assets/customer_icon.png';
export default function Customer() {
    return (
        <div className="border-b-2">
            <div className="px-20 py-10">
                <div className="flex gap-16 justify-between items-center">
                    <div className=" max-w-[200px]">
                        <Image src={CustomerIconLogo} alt="Logo of the customer job" width={200} height={200} />
                    </div>
                    <div>
                        <div className="flex flex-col gap-2">
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
    );
}
