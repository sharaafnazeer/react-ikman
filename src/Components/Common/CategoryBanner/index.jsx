import {Col, Row} from "reactstrap";
import './categories.css'

const CategoryBanner = ({imageUrl, title, count}) => {
    return (
        <Col className="mb-5 category-card" lg={3} md={6} sm={12}>
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