import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { WorkExp } from './WorkExp';
import { Hobbies } from './Hobbies';
import { Personal } from './Personal';

export const AdditionalInfo = () => {
    return(
        <section className="add-info" id="add-info">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Additional Information</h2>
                        <p>If your curiosity is peaked, here you'll find more information. Also, if you need more information or have any questions,
                             feel free to contact me with the button on the top right</p>
                        <Tab.Container id="addinfo-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Work Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Hobbies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">More about me</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="slideInUp" className={"animate__animated animate__slideInUp"}>
                                <Tab.Pane eventKey="first">
                                    <WorkExp/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Hobbies/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Personal/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}