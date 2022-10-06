import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addToCart, addToCompare } from '../redux/cartProduct';


function ProductCard({ product }) {
    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(addToCart(product))
    }
    const addCompare = () => {
        dispatch(addToCompare(product))
    }
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
                </Button>{`  `}
                <Button outline size="sm" onClick={() => addCompare(product)}>
                    Compare
                </Button>
            </CardBody>
        </Card>
    )
}

export default React.memo(ProductCard);
