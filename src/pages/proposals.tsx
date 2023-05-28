import Proposal from '@/components/Proposal/Proposal';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
export default function Proposals() {
    return (
        <div>
            <Header />
            <Container>
                <Proposal jobID={1} text="Seray Sayan Prop" price={50} />
                <Proposal jobID={2} text="Dogu Cagri Prop" price={30} />
                <Proposal jobID={3} text="İbo Sarigoz Prop" price={40} />
            </Container>
            -
        </div>
    );
}
