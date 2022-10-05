import React, { useEffect, useState } from 'react';
import GridView from './GridView.component';
import TableView from './TableView.component';
import { Col, Row, Button } from 'reactstrap';
import CartBadge from './CartBadge.component';
import { NotificationManager } from 'react-notifications';
import Compare from './Compare.component';

function ProductList({ products }) {
    const [gridView, toggleGridView] = useState('grid')
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);
    const [compare, setCompare] = useState([]);
    /* Add products to compare */
    const addCompare = (product) => {
        if (compare.length < 3) {
            let alreadyExist = compare.find((p) => p.id === product.id);
            if (alreadyExist) {
                NotificationManager.warning('', `Already exist in comparision list`);
            } else {
                setCompare([
                    ...compare,
                    product
                ])
            }
        } else {
            NotificationManager.warning('', `Maximum 3 products can be compare at a time.`);
        }
    }
    /* Add products to compare */
    const removeCompare = (id) => {
        if (compare.length) {
            setCompare(compare.filter(p => p.id !== id))
        }

    }
    /* Add product to cart */
    const addToCart = (product) => {
        let alreadyExist = cart.find((p) => p.id === product.id);
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
    /* remove product from cart */
    const removeFromCart = (product) => {
        let alreadyExist = cart.find((p) => p.id === product.id);
        if (alreadyExist) {
            if (alreadyExist.cartQty === 1) {
                let newCart = cart.filter(p => p.id !== product.id)
                setCart([...newCart])
            } else {
                let newCart = cart.map((p) => {
                    if (p.id === product.id) {
                        p.cartQty = p.cartQty - 1;
                    }
                    return p;
                })
                setCart([...newCart])
                setTimeout(() => {
                    NotificationManager.success('', `${product?.title ?? 'Product'} removed from cart`);
                }, 500);
            }
        }
    }
    useEffect(() => {
        return () => {
            console.log('unmont')
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])
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
                    <Compare compare={compare} removeCompare={(id) => removeCompare(id)} />
                </Col>
                <Col sm={2} className={'text-end'}>
                    <CartBadge cart={cart} addCart={(p) => addToCart(p)} removeCart={(p) => removeFromCart(p)} />
                </Col>
            </Row>
            {gridView === 'grid' ?
                <GridView products={products} addCart={(p) => addToCart(p)} addCompare={(p) => addCompare(p)} />
                : <TableView products={products} addCart={(p) => addToCart(p)} addCompare={(p) => addCompare(p)} />}


        </div>
    )
}


export default React.memo(ProductList);
