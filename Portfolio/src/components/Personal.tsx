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
                        <p>My name is Mateo Avalos. I'm an undergraduate at EIA University</p>
                        <p>I'm profoundly passionate about leveraging technology for healthcare advancements.</p>
                        <p>I have robust communication and problem-solving skills, with experience in programming general purpose 
                            applications and microcontrollers. My most proficient programming languages are Java and Python (I'm currently learning web debeloping).</p>
                        <p>If you're interested on knowing more about me, you have links to my GitHub, Instagram and Linkedin in the navitagion bar.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}