import React from 'react'
import './CartBadge.styles.css';
import { Button, Badge } from 'reactstrap';

export default function CartBadge({ cart }) {
    return (
        <div>
            <Button
                color="info"
            // outline
            >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                {' '}Cart{' '}
                <Badge color='danger' pill={true}>
                    {cart.length}
                </Badge>
            </Button>
        </div>
    )
}
