import Customer from '@/components/Customer/Customer';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
export default function Customers() {
    return (
        <div>
            <Header />
            <Container>
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
            </Container>
        </div>
    );
}
