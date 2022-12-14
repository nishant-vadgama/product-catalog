import React from 'react'
import { Col, Row } from 'reactstrap';
import logo from '../logo.svg';
import CartBadge from './CartBadge.component';

function Header() {
    return (
        <Row className='justify-content-between'>
            <Col sm={2}>
                <img src={logo} alt='logo' height={'100'} width={'150'} />
            </Col>
            <Col sm={2} className={'text-end'}>
                <CartBadge />
            </Col>
        </Row>
    )
}

export default React.memo(Header);