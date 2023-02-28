import {Badge, Col, Image, Row} from "react-bootstrap";

const ProductListCard = () => {

    return (
        <Row className="mb-4 pt-3 pb-3">
            <Col lg={3}>
                <Image
                    height={120}
                    width="100%"
                    src={"https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/09/p1022463-1200x900.jpg?key=165dce4e"}/>
            </Col>
            <Col lg={9}>
                <div className="h5">Apple Airpods Pro Max</div>
                <div>
                    <Badge bg="secondary">
                        <Image height={20} width={20}
                               src={'https://cdn-icons-png.flaticon.com/512/528/528351.png'}/>
                        <span
                            style={{
                                fontSize: '8px'
                            }}>
                        {`  Member`}
                    </span>
                    </Badge>
                </div>
                <div>Colombo, Audio MP3</div>
                <div className="color-ikman bold-text">Rs 275,000</div>
            </Col>
            <Col>
                <hr/>
            </Col>
        </Row>
    )
}

export default ProductListCard;