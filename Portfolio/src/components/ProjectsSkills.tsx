import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Projects } from './Projects';
import { Skills } from './Skills';

export const ProjectsSkills = () => {
    return(
        <section className="projskills" id="projskills">
            <Container>
                
                <Row>
                    <Col size={12}>
                        <h2>Additional Information</h2>
                        <p>Here you'll find more information about me. Feel free to look around（￣︶￣）</p>
                        <Tab.Container id="projskills-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Skills</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                                <Tab.Pane eventKey="first">
                                    <Projects/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Skills/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}