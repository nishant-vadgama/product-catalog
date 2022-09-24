import React, { useState } from 'react';
import './ProductList.styles.css'
import GridView from '../GridView/GridView.component';
import TableView from '../TableView/TableView.component';
import { Col, Row, Button } from 'reactstrap';
import CartBadge from '../Cart/CartBadge.component';
import { NotificationManager } from 'react-notifications';

export default function ProductList({ products }) {
    const [gridView, toggleGridView] = useState('grid')
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        let alreadyExist = cart.find((p) => p.id === product.id);
        // console.log(product, alreadyExist)
        if (alreadyExist) {
            if (alreadyExist.cartQty >= alreadyExist.limit) {
                NotificationManager.warning('', `You've reached maximum limit for this product`);
            } else {
                let newCart = cart.map((p) => {
                    if (p.id === product.id) {
                        p.cartQty = p.cartQty + 1;
                    }
                    return p;
                })
                setCart([...newCart])
                setTimeout(() => {
                    NotificationManager.success('', `${product?.title ?? 'Product'} added to cart`);
                }, 500);
            }
        } else {
            product.cartQty = 1;
            setCart([
                ...cart,
                product
            ])
            setTimeout(() => {
                NotificationManager.success('', `${product?.title ?? 'Product'} added to cart`);
            }, 500);
        }
    }
    return (
        <div className='product-list'>
            <Row className='my-2 justify-content-between'>
                <Col sm={2}>
                    <Button onClick={() => toggleGridView('grid')} color={gridView === 'grid' ? 'info' : 'secondary'}>
                        <i className="fa fa-th-large" aria-hidden="true"></i>
                    </Button>
                    <Button onClick={() => toggleGridView('table')} color={gridView === 'table' ? 'info' : 'secondary'}>
                        <i className="fa fa-th-list" aria-hidden="true"></i>
                    </Button>
                </Col>
                <Col sm={2} className={'text-end'}>
                    <CartBadge cart={cart} />
                </Col>
            </Row>
            {gridView === 'grid' ?
                <GridView products={products} addCart={(p) => addToCart(p)} />
                : <TableView products={products} addCart={(p) => addToCart(p)} />}


        </div>
    )
}
