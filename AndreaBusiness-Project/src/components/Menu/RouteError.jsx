import { Container, Row, Col } from 'react-bootstrap';

export const RouteError = () => {
    return (
        <Container className="error">
            <Col size={12}>
            <Row>
                <h1>404: Not Found</h1>
            </Row>
            <Row className="error-message">
                <h2>Sorry, the page you are looking for does not exist.</h2>
            </Row>
            <Row>
                <img src="https://media1.tenor.com/m/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" alt="John Travolta is confused with the direction you want to go" />
            </Row>
            </Col>
        </Container>
    )
}