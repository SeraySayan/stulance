import Freelancer from '@/components/Freelancer/Freelancer';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
export default function Freelancers() {
    return (
        <div>
            <Header />
            <Container>
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
            </Container>
        </div>
    );
}
