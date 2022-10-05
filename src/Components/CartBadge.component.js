import React, { useState } from 'react'
import { Button, Badge, Toast, ToastHeader, ToastBody, Row, Col, Table } from 'reactstrap';

function CartBadge({ cart, addCart, removeCart }) {
    const [showCart, toggleShowCart] = useState(false)
    let grandTotal = 0;
    return (
        <div>
            <Button
                color="info"
                // outline
                onClick={() => toggleShowCart(!showCart)}
            >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {' '}Cart{' '}
                <Badge color='danger' pill={true}>
                    {cart.length}
                </Badge>
            </Button>
            <Toast isOpen={showCart} className='cart-view'>
                <ToastHeader toggle={() => toggleShowCart(!showCart)}>
                    Your Cart Items
                </ToastHeader>
                <ToastBody>
                    <Row>
                        <Col sm={12}>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>
                                            #
                                        </th>
                                        <th>
                                            Item
                                        </th>
                                        <th>
                                            Qty
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((product, index) => {
                                        grandTotal = grandTotal + (product.price * product.cartQty);
                                        return (
                                            <tr key={'table_' + index}>
                                                <th scope="row" className='image-thumb'>
                                                    <img
                                                        alt={product?.title ?? ''}
                                                        src={product?.images[0] ?? ''}
                                                    />
                                                </th>
                                                <td className='fw-bold'>
                                                    {product?.title ?? ''}
                                                </td>
                                                <td>
                                                    <i onClick={() => removeCart(product)} className="fa fa-minus-circle text-info fs-6 cur-point" aria-hidden="true"></i>
                                                    {`  `}{product?.cartQty ?? 0}{`  `}
                                                    <i onClick={() => addCart(product)} className="fa fa-plus-circle text-info fs-6 cur-point" aria-hidden="true"></i>
                                                </td>
                                                <td className=''>
                                                    {product?.price.toFixed(2) ?? ''}
                                                </td>
                                                <td className=''>
                                                    {(product.price * product.cartQty).toFixed(2) ?? ''}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr >
                                        <th className='' colSpan={4}>
                                            {`Grand Total : `}
                                        </th>
                                        <th className=''>
                                            {grandTotal.toFixed(2)}
                                        </th>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </ToastBody>
            </Toast>
        </div>
    )
}


export default React.memo(CartBadge);