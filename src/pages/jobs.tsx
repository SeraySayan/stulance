import Job from '@/components/Job/Job';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
export default function Jobs() {
    return (
        <div>
            <Header />
            <Container>
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
            </Container>
        </div>
    );
}
