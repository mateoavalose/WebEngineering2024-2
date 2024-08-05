import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>&copy; 2024 Mateo Avalos</p>
                        <p>Based on the design by Judy Gab (<span style={{color: "cyan"}}>judygab</span>)</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}