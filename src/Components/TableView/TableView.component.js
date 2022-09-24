import React from 'react'
import { Col, Row, Table, Button } from 'reactstrap';
import './TableView.styles.css';


export default function TableView({ products, addCart, addCompare }) {
    return (
        <div className='table-view'>
            <Row>
                <Col sm={12}>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Product Name
                                </th>
                                <th>
                                    Brand Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
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
                                            {product?.brand ?? ''}
                                        </td>
                                        <td className='item-desc'>
                                            {product?.description ?? ''}
                                        </td>
                                        <td className=''>
                                            <Button className='mb-1' onClick={() => addCart(product)}>
                                                Add to Cart
                                            </Button>
                                            <Button outline size="sm" onClick={() => addCompare(product)}>
                                                Compare
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}
