import {Col, Container, Row} from "react-bootstrap";
import './products-body.css'
import ProductsFilter from "./ProductsFilter";
import ProductCarousel from "./ProductCarousel";
import ProductsBreadCrumb from "./ProductsBreadCrumb";
import ProductsTitle from "./ProductsTitle";
import ProductListCard from "./ProductListCard";
import SearchBox from "../Common/SearchBox";
import ProductList from "./ProductList";
import {useEffect, useState} from "react";
import {getProductsByCategoryIdApi} from "../../Api/productsApi";

const ProductsBody = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getProductsByCategoryIdApi().then(res => {
            setProducts(res?.data || []);
        })
    }, []);

    const sortFilterItems = [
        {
            id: 1,
            title: 'Date : Newest on top'
        },
        {
            id: 2,
            title: 'Date : Oldest on top'
        },
        {
            id: 3,
            title: 'Price : High to low'
        },
        {
            id: 4,
            title: 'Price : Low to high'
        }
    ];

    const adsFilterItems = [
        {
            id: 1,
            title: 'URGENT'
        }, {
            id: 2,
            title: 'FEATURED'
        }
    ];

    const posterFilterItems = [
        {
            id: 1,
            title: 'All'
        },
        {
            id: 2,
            title: 'Members'
        },
        {
            id: 3,
            title: 'Authorized Agent'
        },
        {
            id: 4,
            title: 'Non Members'
        }

    ];

    const onSearch = (value) => {
        console.log(value);
    }


    return (
        <Container className="ikman-page-padding pt-5 pb-5">
            <Row className="bg-white ikman-products-body">

                <Col xs={12} md={4} lg={3} style={{
                    borderBottom: '1px solid #e7edee'
                }} className="p-3 mb-3 flex gap-2 align-items-center">
                    <i className="bi bi-geo-alt-fill color-ikman"></i>
                    <span className="h6 mt-1">Colombo</span>
                </Col>

                <Col xs={12} md={8} lg={9} style={{
                    borderBottom: '1px solid #e7edee'
                }} className="p-3 mb-3">
                    <Row>
                        <Col className="flex gap-2 align-items-center">
                            <i className="bi bi-tag-fill  color-ikman"></i>
                            <span className="h6 mt-1">Electronics</span>
                        </Col>
                        <Col>
                            <SearchBox onSearchClick={onSearch}/>
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} md={4} lg={3}>
                    <ProductsFilter
                        adsFilterItems={adsFilterItems}
                        posterFilterItems={posterFilterItems}
                        sortFilterItems={sortFilterItems}
                    />
                </Col>
                <Col xs={12} md={8} lg={9}>
                    <Row>
                        <Col xs={12} md={9}>
                            <ProductsBreadCrumb/>
                            <ProductsTitle/>
                            <ProductCarousel/>

                            <ProductList isLoading={isLoading} products={products}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductsBody;