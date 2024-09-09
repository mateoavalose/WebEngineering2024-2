import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Model } from './Model';

export const ModelShowcase = () => {
    return(
        <section className="modelShowcase" id="modelShowcase">
            <Container>
                <Row>
                    <Col size={12} >
                        <div className="modelShowcase-text">
                             <h2>Model Showcase</h2>
                             <p>Here you'll find more information about my models. If you're interested, feel free to go to their portafolio or contact them directly</p>
                        </div>
                        <Model/> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}