import {Col, Row, Form, Badge} from "react-bootstrap";
import React from "react";

const AdsFilter = ({items = []}) => {

    return (
        <div className="mb-4">
            <Row>
                <Col xs={12}>
                    <p className="filter-headings">Filter ads by</p>
                </Col>
                <Col xs={12}>
                    {
                        items.map((item) => (
                            <Form.Check
                                key={item.id}
                                type="checkbox"
                                label={
                                    <Badge bg={item.id === 1 ? 'danger' : 'dark'}><span style={{
                                        fontSize: '8px'
                                    }}>{item.title}</span></Badge>
                                }
                                id={item.id}
                            />
                        ))
                    }

                </Col>
            </Row>
        </div>
    )
}

export default AdsFilter;