import Proposal from '@/components/Proposal/Proposal';
import Header from '@/components/Header/Header';
export default function Proposals() {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto">
                <Proposal />
                <Proposal />
                <Proposal />
            </div>
        </div>
    );
}
