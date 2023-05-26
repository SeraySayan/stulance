import Job from '@/components/Job/Job';
import Header from '@/components/Header/Header';
export default function Jobs() {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto">
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    );
}
