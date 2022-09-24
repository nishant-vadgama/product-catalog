import React from 'react';
import './ProductCard.styles.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default function ProductCard({ product, addCart }) {
    return (
        <Card className='product-card'>
            <img
                alt={product?.title ?? ''}
                src={product?.images[0] ?? ''}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {product?.title ?? ''}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {product?.brand ?? ''}
                </CardSubtitle>
                <CardText>
                    {product?.description ?? ''}
                </CardText>
                <Button onClick={() => addCart(product)}>
                    Add to Cart
                </Button>
            </CardBody>
        </Card>
    )
}