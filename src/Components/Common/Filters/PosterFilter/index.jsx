import {Col, Form, Row} from "react-bootstrap";

const PosterFilter = ({items = []}) => {

    return (
        <div className="mb-4">
            <Row>
                <Col xs={12}>
                    <p className="filter-headings">Type of poster</p>
                </Col>
                <Col xs={12}>
                    <Form.Select aria-label="Default select example">
                        {
                            items.map((item, index) => (
                                <option key={index} value={item.id}>{item.title}</option>
                            ))
                        }
                    </Form.Select>
                </Col>
            </Row>
        </div>
    )
}

export default PosterFilter;