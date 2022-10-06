import React, { useCallback, useEffect, useState } from 'react';
import GridView from './GridView.component';
import TableView from './TableView.component';
import { Col, Row, Button } from 'reactstrap';
import { NotificationManager } from 'react-notifications';
import CartBadge /* { MemoizedCartBadge } */ from './CartBadge.component';
import Compare/* { MemoizedCompare } */ from './Compare.component';

function ProductList({ products }) {
    const [gridView, toggleGridView] = useState('grid')
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? []);
    const [compare, setCompare] = useState([]);
    /* Add products to compare */
    const addCompare = useCallback((product) => {
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
    }, [compare])
    /* Add products to compare */
    const removeCompare = useCallback((id) => {
        if (compare.length) {
            setCompare(compare.filter(p => p.id !== id))
        }

    }, [compare])
    /* Add product to cart */
    const addToCart = useCallback((product) => {
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
    }, [cart])
    /* remove product from cart */
    const removeFromCart = useCallback((product) => {
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
    }, [cart])
    const changeProductView = useCallback((view) => {
        toggleGridView(view)
    }, [])
    useEffect(() => {
        return () => {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])
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
                    <Compare compare={compare} removeCompare={removeCompare} />
                </Col>
                <Col sm={2} className={'text-end'}>
                    <CartBadge cart={cart} addCart={addToCart} removeCart={removeFromCart} />
                </Col>
            </Row>
            {gridView === 'grid' ?
                <GridView products={products} addCart={addToCart} addCompare={addCompare} />
                : <TableView products={products} addCart={addToCart} addCompare={addCompare} />}
        </div>
    )
}


export default React.memo(ProductList);
