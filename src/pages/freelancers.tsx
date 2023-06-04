import Freelancer from '@/components/Freelancer/Freelancer';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
export default function Freelancers() {
    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
                <Freelancer name="Seray" surname="Sayan" country="Turkey" skills={['JavaScript', 'C#']} />
            </Container>
        </div>
    );
}
