import './search-header.css'
import logo from '../../Assets/logo.png'
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";

const SearchHeader = () => {

    return (
        <div className="search-header">
            <Container>
                <Row>
                    <Col className="search-header-logo">
                        <div>
                            <img src={logo} alt={'Logo'}/>
                        </div>
                        <div>
                            All adds
                        </div>
                        <div>
                            <ButtonGroup
                                className="my-2"
                            >
                                <Button outline className="color-white">
                                    Si
                                </Button>
                                <Button outline className="color-white">
                                    Eng
                                </Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                    <Col>
                        <Row>
                            <Col><i className="bi bi-chat"></i>{` Chat`}</Col>
                            <Col><i className="bi bi-person"></i>{` Login`}</Col>
                            <Col>
                                <Button color="warning" className="post-add-btn bold-text">
                                    POST YOUR AD
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchHeader;