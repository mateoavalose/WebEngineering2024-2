import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Photo } from './Photo';

export const PhotoShowcase = () => {
    return(
        <section className="photoShowcase" id="photoShowcase">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Photos</h2>
                        <p>This are the photos we have for sale</p>
                        <Photo/> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}