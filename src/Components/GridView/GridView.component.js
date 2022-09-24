import React from 'react'
import './GridView.styles.css';
import { Row, Col } from 'reactstrap';
import ProductCard from '../ProductCard/ProductCard.component';

export default function GridView({ products, addCart, addCompare }) {
    return (
        <div className='grid-view'>
            <Row>
                {products.map((pro, index) => {
                    return (
                        <Col sm={3} key={'grid_' + index}>
                            <ProductCard product={pro} addCart={(p) => addCart(p)} addCompare={(p) => addCompare(p)} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
