import React from 'react'
import './GridView.styles.css';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import ProductCard from '../ProductCard/ProductCard.component';

export default function GridView({ products }) {
    return (
        <div className='grid-view'>
            <Row>
                {products.map((pro, index) => {
                    return (
                        <Col sm={3} key={'grid_' + index}>
                            <ProductCard product={pro} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
