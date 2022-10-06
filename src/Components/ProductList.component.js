import React, { useCallback, useState } from 'react';
import GridView from './GridView.component';
import TableView from './TableView.component';
import { Col, Row, Button } from 'reactstrap';
import Compare from './Compare.component';

function ProductList({ products }) {
    const [gridView, toggleGridView] = useState('grid')
    const changeProductView = useCallback((view) => {
        toggleGridView(view)
    }, [])
    return (
        <div className='product-list'>
            <Row className='my-2 justify-content-between'>
                <Col sm={2}>
                    <Button onClick={() => changeProductView('grid')} color={gridView === 'grid' ? 'info' : 'secondary'}>
                        <i className="fa fa-th-large" aria-hidden="true"></i>
                    </Button>
                    <Button onClick={() => changeProductView('table')} color={gridView === 'table' ? 'info' : 'secondary'}>
                        <i className="fa fa-th-list" aria-hidden="true"></i>
                    </Button>
                </Col>
                <Col sm={2} className={'text-end'}>
                    <Compare />
                </Col>
            </Row>
            {gridView === 'grid' ?
                <GridView products={products} />
                : <TableView products={products} />}
        </div>
    )
}


export default React.memo(ProductList);
