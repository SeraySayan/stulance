import Job from '@/components/Job/Job';
import HeaderLoggedIn from '@/components/HeaderLoggedIn/HeaderLoggedIn';
import Container from '@/components/Container/Container';
import axios from 'axios';
export default function Jobs() {
    axios
        .get('http://localhost:8000/jobs')
        .then(function (response) {
            // Request successful, handle the response data
            console.log(response.data);
            console.log(response.data[0].job_title);
        })
        .catch(function (error) {
            // An error occurred, handle the error
            console.log(error);
        });
    return (
        <div>
            <HeaderLoggedIn />
            <Container>
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
                <Job jobDate="Jun 24, 2023" jobTitle="JOB" description="seray sayan job" price={50} />
            </Container>
        </div>
    );
}
