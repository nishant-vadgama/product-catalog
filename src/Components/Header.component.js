import React from 'react'
import { Col, Row } from 'reactstrap';
import logo from '../logo.svg';
import CartBadge from './CartBadge.component';

function Header() {
    return (
        <Row>
            <Col sm={12}>
                <div className='justify-content-between'>
                    <Col sm={2}>
                        <img src={logo} alt='logo' height={'100'} width={'150'} />
                    </Col>
                    <Col sm={2} className={'text-end'}>
                        {/* <CartBadge cart={cart} addCart={(p) => addToCart(p)} removeCart={(p) => removeFromCart(p)} /> */}
                    </Col>
                </div>
            </Col>
        </Row>
    )
}

export default React.memo(Header);