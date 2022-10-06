import React from 'react'
import { Row, Col } from 'reactstrap';
import ProductCard from './ProductCard.component';

function GridView({ products }) {
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

export default React.memo(GridView);
