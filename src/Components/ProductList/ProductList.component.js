import React, { useState } from 'react';
import './ProductList.styles.css'
import GridView from '../GridView/GridView.component';
import TableView from '../TableView/TableView.component';
import { Col, Row, Button } from 'reactstrap';

export default function ProductList({ products }) {
    const [gridView, toggleGridView] = useState('grid')
    return (
        <div className='product-list'>
            <Row className='my-2'>
                <Col sm={3}>
                    <Button onClick={() => toggleGridView('grid')} color={gridView === 'grid' ? 'info' : 'secondary'}>
                        <i class="fa fa-th-large" aria-hidden="true"></i>

                    </Button>
                    <Button onClick={() => toggleGridView('table')} color={gridView === 'table' ? 'info' : 'secondary'}>
                        <i class="fa fa-th-list" aria-hidden="true"></i>
                    </Button>
                </Col>
            </Row>
            {gridView === 'grid' ? <GridView products={products} /> : <TableView products={products} />}


        </div>
    )
}
