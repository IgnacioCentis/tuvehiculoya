import React from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
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
                                <Card className="text-center">
                                    <Card.Header> Carrito de compras</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Ops... El carrito esta vacio!</Card.Title>
                                        
                                        {idOrder?<Card.Text>Tu compra fue procesada exitosamente, Guia : {idOrder}</Card.Text>:<Card.Text>Seguro no encontraste lo que buscas?</Card.Text>}
                                        
                                        <LinkContainer to='/'>
                                            <Button className='btn-secondary'>Continuar comprando</Button>
                                        </LinkContainer>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">TuVehiculoYa!</Card.Footer>
                                </Card>
                               
                                     
                                </div>
                        }                     
                </Container>           
        </>
    )
}

export default Cart
