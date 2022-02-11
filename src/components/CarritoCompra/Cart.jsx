import React from 'react'
import { Badge, Card, ListGroup, PageItem, Button,CloseButton } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'

const Cart = () => {

    const {cartList,vaciarCarrito,eliminarItem} = useCartContext()

    return(
        <>       
            <div>
                <h3>Carrito de compra!</h3>   
                    {cartList.map(p => 
                        <ListGroup as="ol" numbered>
                        
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-start">
                                
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{p.item.name}</div>             
                            </div>
                            <Badge variant="primary" pill>
                            {p.quantity}
                            </Badge>
                            <div > <CloseButton onClick={() => eliminarItem(p)} className="mx-2" /></div>
                            </ListGroup.Item >                
                        </ListGroup>
                    )}
                <div className="mt-2">
                    <Button onClick={vaciarCarrito} variant="light">Vaciar</Button>
                </div>
                
            </div>
        </>
    )
}

export default Cart
