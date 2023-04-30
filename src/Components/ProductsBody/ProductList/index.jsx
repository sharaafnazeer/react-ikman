import {Row, Col} from "react-bootstrap";
import ProductListCard from "../ProductListCard";
import {Fragment} from "react";

const ProductList = ({isLoading, products = []}) => {

    return (
        <Fragment>
            {
                products.map((product) => (
                    <Row key={product.id}>
                        <Col>
                            <ProductListCard product={product}/>
                        </Col>
                    </Row>
                ))
            }
        </Fragment>
    )
}

export default ProductList;