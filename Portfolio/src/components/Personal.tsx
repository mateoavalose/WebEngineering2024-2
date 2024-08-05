import { Container, Row, Col } from 'react-bootstrap';
import headShot from '../assets/img/headshot.png';

export const Personal = () => {
    return (
        <section className="peronal" id="personal">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={headShot} alt="img" />
                    </Col>
                    <Col md={6}>
                        <h3>Get to know me!</h3>
                        <p>I'm an undergraduate at EIA University, passionate about leveraging technology for healthcare advancements. 
                            I have robust communication and problem-solving skills, with experience with programming general purpose 
                            applications and microcontrollers. My most proficient programming languages are Java and Python (always learning!)..</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}