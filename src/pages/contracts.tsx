import Contract from '@/components/Contract/Contract';
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
export default function Contracts() {
    return (
        <div>
            <Header />
            <Container>
                <Contract
                    jobID={1}
                    proposalID={2}
                    price={50}
                    startDate="June 24, 2023"
                    dueDate="July 24, 2023"
                    agreementText="Converting figma design into HTML"
                    customerReview="Good"
                    customerRating={4}
                    freelancerReview="Good"
                    freelancerRating={4}
                />
                <Contract
                    jobID={1}
                    proposalID={2}
                    price={50}
                    startDate="June 24, 2023"
                    dueDate="July 24, 2023"
                    agreementText="Converting figma design into HTML"
                    customerReview="Good"
                    customerRating={4}
                    freelancerReview="Good"
                    freelancerRating={4}
                />
                <Contract
                    jobID={1}
                    proposalID={2}
                    price={50}
                    startDate="June 24, 2023"
                    dueDate="July 24, 2023"
                    agreementText="Converting figma design into HTML"
                    customerReview="Good"
                    customerRating={4}
                    freelancerReview="Good"
                    freelancerRating={4}
                />
            </Container>
        </div>
    );
}
