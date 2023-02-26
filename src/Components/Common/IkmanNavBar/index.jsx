import {Container, Image, Nav, Navbar, Button, ButtonGroup} from 'react-bootstrap';
import './ikman-navbar.css'
import logo from '../../../Assets/logo.png'

const IkmanNavBar = (props) => {

    return (
        <Navbar className="bg-green" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="color-white">
                    <Image src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="color-white">
                    <Nav className="me-auto align-items-center">
                        <Nav.Link href="#home" className="color-white">All Ads</Nav.Link>
                        <Nav.Link href="#link" className="color-white">
                            <ButtonGroup aria-label="Basic example">
                                <Button className="bg-green" variant="secondary">Si</Button>
                                <Button className="bg-green" variant="secondary">Eng</Button>
                            </ButtonGroup>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end color-white">
                    <Nav>
                        <Nav.Link href="#home" className="color-white"><i className="bi bi-chat"></i> Chat</Nav.Link>
                        <Nav.Link href="#home" className="color-white"><i className="bi bi-person"></i> Login</Nav.Link>
                        <Button className="post-add-btn">POST YOUR AD</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default IkmanNavBar;