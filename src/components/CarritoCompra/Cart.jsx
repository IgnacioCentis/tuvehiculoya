import React from 'react'
import {  Button, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartList from './CartList'
import CartTotalDetail from './CartTotalDetail'
import FormBuyer from './FormBuyer'

const Cart = () => {

    const {cartList,idOrder} = useCartContext()

    return(
        <>       
               <Container className='mt-4' fluid>                   
                    {   cartList.length  !== 0  
                            ? 
                                <Row xs={1} md={2} lg={4} className="g-4"> 
                                   
                                    <Col> <CartList /></Col>
                                    <Col><CartTotalDetail/></Col>
                                    <Col><FormBuyer /></Col>
                                   
                                    <Col></Col>
                                </Row>
                            :   
                                <div>
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            {idOrder?<h4>Tu Orden: {idOrder}</h4>:''}
                                            <h3> Ops... El carrito esta vacio!</h3> 
                                            <h5>Seguro no encontraste lo que buscabas?</h5> 
                                            <div className="mt-2">
                                                <LinkContainer to='/'>
                                                    <Button className='btn-secondary'>Continuar comprando</Button>
                                                </LinkContainer>
                                            </div>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>
                        }                     
                </Container>           
        </>
    )
}

export default Cart
