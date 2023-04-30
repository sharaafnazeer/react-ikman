import {Badge, Col, Image, Row} from "react-bootstrap";

const ProductListCard = ({product}) => {

    return (
        <Row className="mb-4 pt-3 pb-3">
            <Col lg={3}>
                <Image
                    height={120}
                    width="100%"
                    src={product.imageUrl}/>
            </Col>
            <Col lg={9}>
                <div className="h5">{product.title}</div>
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
                <div>Colombo, Audio MP3 {`${product.cityName} ${product.categoryName}`}</div>
                <div className="color-ikman bold-text">{product.price}</div>
            </Col>
            <Col>
                <hr/>
            </Col>
        </Row>
    )
}

export default ProductListCard;