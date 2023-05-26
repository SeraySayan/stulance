import Freelancer from '@/components/Freelancer/Freelancer';
import Header from '@/components/Header/Header';
export default function Freelancers() {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto">
                <Freelancer />
                <Freelancer />
                <Freelancer />
            </div>
        </div>
    );
}
