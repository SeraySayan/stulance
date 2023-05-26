import Customer from '@/components/Customer/Customer';
import Header from '@/components/Header/Header';
export default function Customers() {
    return (
        <div>
            <Header />
            <div className="max-w-[1140px] mx-auto">
                <Customer />
                <Customer />
                <Customer />
            </div>
        </div>
    );
}
