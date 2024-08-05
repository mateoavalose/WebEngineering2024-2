import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import gitIcon from '../assets/img/NavBar-githubIcon.svg';
import igIcon from '../assets/img/NavBar-instagramIcon.svg';
import inIcon from '../assets/img/NavBar-linkedinIcon.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState<boolean>(false);

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

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ?
                                'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#projskills" className={activeLink === 'projskills' ?
                                'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projskills')}>Projects and Skills</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://github.com/mateoavalose"><img src={gitIcon} alt="" /></a>
                                <a href="https://www.instagram.com/mateoavalos/"><img src={igIcon} alt="" /></a>
                                <a href="https://www.linkedin.com/in/mateoavalose/"><img src={inIcon} alt="" /></a>
                            </div>
                            <HashLink to="#connect">
                                <button className="vvd"><span>Contact me</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}