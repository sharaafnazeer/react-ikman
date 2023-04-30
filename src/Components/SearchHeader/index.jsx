import './search-header.css'
import logo from '../../Assets/logo.png'
import {Button, ButtonGroup, Col, Container, Row} from "reactstrap";
import SearchBox from "../Common/SearchBox";
import {useNavigate} from "react-router-dom";

const SearchHeader = () => {

    const navigate = useNavigate();
    const onSearch = (value) => {
        // 1.
        navigate(`/all-adds?query=${value}&isAvailable=${true}`);
    }

    const onLogoClick = () => {
        navigate('/');
    }

    return (
        <div className="search-header">
            <Container>
                <Row>
                    <Col className="search-header-left">
                        <div onClick={() => onLogoClick()}>
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
                    <Col className="search-header-right">
                        <div>
                            <i className="bi bi-chat"></i>{` Chat`}
                        </div>
                        <div>
                            <i className="bi bi-person"></i>{` Login`}
                        </div>
                        <Button color="warning" className="post-add-btn bold-text">
                            POST YOUR AD
                        </Button>
                    </Col>
                </Row>

                <Row className="pt-5 pb-3">
                    <Col className="flex flex-row justify-content-center">
                        <Button outline className="btn-location">
                            <i className="bi bi-geo-alt-fill"></i> All of Sri Lanka
                        </Button>
                    </Col>
                </Row>
                <Row className="pb-5 ps-6rem pe-6rem">
                    <SearchBox onSearchClick={onSearch}/>
                </Row>
            </Container>
        </div>
    )
}

export default SearchHeader;