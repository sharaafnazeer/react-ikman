import {Col, Row} from "reactstrap";

const CategoryBanner = ({imageUrl, title, count}) => {
    return (
        <Col>
            <Row>
                <Col md={3}>
                    <img src={imageUrl} alt="Icon" height={40} width={40}/>
                </Col>
                <Col md={9}>
                    <div>{title}</div>
                    <div>{count}</div>
                </Col>
            </Row>
        </Col>
    )
}

export default CategoryBanner