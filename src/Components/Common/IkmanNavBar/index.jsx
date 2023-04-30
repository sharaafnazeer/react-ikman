import {Container, Image, Nav, Navbar, Button, ButtonGroup} from 'react-bootstrap';
import './ikman-navbar.css'
import logo from '../../../Assets/logo.png'
import {useNavigate} from "react-router-dom";

const IkmanNavBar = (props) => {

    const navigate = useNavigate();

    const onLogoClick = () => {
        navigate('/');
    }

    return (
        <Navbar className="bg-green" variant="light" expand="lg">
            <Container className="ikman-page-padding">
                <Navbar.Brand onClick={() => onLogoClick()} className="color-white">
                    <Image src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="color-white">
                    <Nav className="me-auto align-items-center ikman-nav-gap">
                        <Nav.Link href="#home" className="color-white ikman-nav-link">All Ads</Nav.Link>
                        <Nav.Link href="#link" className="color-white ikman-nav-link">
                            <ButtonGroup aria-label="Basic example">
                                <Button className="bg-green" variant="secondary">Si</Button>
                                <Button className="bg-green" variant="secondary">Eng</Button>
                            </ButtonGroup>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end color-white">
                    <Nav className="ikman-nav-gap">
                        <Nav.Link href="#home" className="color-white ikman-nav-link"><i className="bi bi-chat"></i> Chat</Nav.Link>
                        <Nav.Link href="#home" className="color-white ikman-nav-link"><i className="bi bi-person"></i> Login</Nav.Link>
                        <Button className="post-add-btn">POST YOUR AD</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default IkmanNavBar;