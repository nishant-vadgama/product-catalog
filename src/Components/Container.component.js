import React from 'react'
import Products from '../Data/ProductList.data';
import ProductList from './ProductList.component';
import { Col, Row } from 'reactstrap';

function Container() {
    return (
        <Row>
            <Col sm={12}>
                <ProductList products={Products} />
            </Col>
        </Row>
    )
}

export default React.memo(Container)