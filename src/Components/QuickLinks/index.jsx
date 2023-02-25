import {Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";
import {Fragment} from "react";

const QuickLinks = ({quickLinks = []}) => {

    const mapLinks = (link) => {
        return link.title + ` | `
    }

    return (
        <div className="container p-4 ps-10rem pe-10rem">
            <div className="h6">
                Quick links
            </div>

            <Row>
                {
                    quickLinks.map((category) => (
                        <Col key={category.id}>
                            <Card style={{background: '#f3f6f5', border: 0}}>
                                <CardBody>
                                    <CardTitle tag="h6">
                                        {category.title}
                                    </CardTitle>
                                    <CardText>
                                        {
                                            category.links.map((link, index) => (
                                                <Fragment key={link.id}>
                                                    {
                                                        category.links.length === index + 1 ? (
                                                            <a href={link.url}>{link.title}</a>
                                                        ) : (
                                                            <a href={link.url}>{mapLinks(link)}</a>
                                                        )
                                                    }
                                                </Fragment>
                                            ))
                                        }
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default QuickLinks;