import { useState, useEffect } from 'react';
import { Navbar, Container, Col, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('homePage');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Col className="logo">
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                </Col>
                <Col className="links">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/models" className={activeLink === 'models' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('models')}>Models</Nav.Link>
                        <Nav.Link as={Link} to="*" className={activeLink === 'error' ? 'active navbar-link' : 'navbar-link'} 
                            onClick={() => onUpdateActiveLink('error')}>404</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>                
                </Col>
            </Container>
        </Navbar>
    )
}