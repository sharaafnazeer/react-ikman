import {Button, Container} from "react-bootstrap";
import IkmanNavBar from "../../Components/Common/IkmanNavBar";
import {Fragment} from "react";
import {Link, useNavigate, useRouteError} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    const error = useRouteError(); // return an error object based on the router error


    return (
        <Fragment>
            <IkmanNavBar/>
            <Container className="ikman-page-padding pt-5 pb-5 text-center">
                <h3>{error.status}</h3>
                <h4>The page you are looking for is unavailable</h4>
                <Link to={`/`}>
                    <Button>Go to Home</Button>
                </Link>
            </Container>
        </Fragment>
    )
}

export default NotFound;