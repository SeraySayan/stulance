import Customer from '@/components/Customer/Customer';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
export default function Customers() {
    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
                <Customer name="Dogu Cagri" surname="Ozarpaci" country="Spain" jobDone={80} />
            </Container>
        </div>
    );
}
