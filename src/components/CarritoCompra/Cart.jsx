import React from 'react'
import { Badge, Card, ListGroup, PageItem, Button,CloseButton, Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import CartList from './CartList'
import CartTotalDetail from './CartTotalDetail'
import FormBuyer from './FormBuyer'

const Cart = () => {

    const {cartList} = useCartContext()

    return(
        <>       
               <Container className='mt-4' fluid>                   
                    {   cartList.length  !== 0  
                            ? 
                                <Row xs={1} md={2} lg={4} className="g-4"> 
                                   
                                    <Col> <CartList /></Col>
                                    <Col><FormBuyer /></Col>
                                    <Col><CartTotalDetail/></Col>
                                    <Col></Col>
                                </Row>
                            :   
                                <div>
                                    <Row>
                                        <Col></Col>
                                        <Col>
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
