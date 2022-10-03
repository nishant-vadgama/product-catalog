import React, { useState } from 'react'
import './Compare.styles.css';
import { Button, Badge, Toast, ToastHeader, ToastBody, Row, Col, Table } from 'reactstrap';

function Rating({ rate }) {
    let rating = [0, 0, 0, 0, 0];
    rating.fill(1, 0, rate);
    return (
        <>
            {rating.map((e, i) => {
                return (
                    <span key={i} className={"fa fa-star " + (e ? 'checked' : '')}></span>
                )
            })}
        </>
    )
}

function Compare({ compare, removeCompare }) {
    const [showCart, toggleShowCart] = useState(false)
    return (
        <div>
            <Button
                color="info"
                outline
                onClick={() => toggleShowCart(!showCart)}
            >
                <i className="fa fa-superpowers" aria-hidden="true"></i>
                {' '}Compare{' '}
                <Badge color='danger' pill={true}>
                    {compare.length}
                </Badge>
            </Button>
            {compare.length > 0 && <Toast isOpen={showCart} className='compare-view'>
                <ToastHeader toggle={() => toggleShowCart(!showCart)}>
                    Your Compare Items
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
                                            Rating
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Brand
                                        </th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {compare.map((product, index) => {
                                        // grandTotal = grandTotal + (product.price * product.cartQty);
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
                                                    <Rating rate={Math.ceil(product?.rating ?? 0)} />
                                                </td>
                                                <td className=''>
                                                    {product?.price.toFixed(2) ?? ''}
                                                </td>
                                                <td className=''>
                                                    {product?.brand ?? ''}
                                                </td>
                                                <td className=''>
                                                    <Button className='' size="sm" onClick={() => removeCompare(product?.id)}>
                                                        Remove
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </ToastBody>
            </Toast>}
        </div>
    )
}


export default React.memo(Compare);