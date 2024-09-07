import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Makeup } from './Makeup';

export const MakeupShowcase = () => {
    return(
        <section className="makeupShowcase" id="makeupShowcase">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Makeup</h2>
                        <p>Our beautiful models use this makeup to cover their ugliness. Maybe it works on you too!</p>
                        <Makeup/> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}