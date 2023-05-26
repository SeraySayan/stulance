import Contract from '@/components/Contract/Contract';
import Header from '@/components/Header/Header';
export default function Contracts() {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto">
                <Contract />
                <Contract />
                <Contract />
            </div>
        </div>
    );
}
