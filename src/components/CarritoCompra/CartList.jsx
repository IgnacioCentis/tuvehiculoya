import React from 'react';
import { Badge, Button, CloseButton, ListGroup } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';

export default function CartList() {
    
    const {cartList,vaciarCarrito,eliminarItem} = useCartContext()
  return <div>
             {cartList.map(p => 
                <div>
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
                </div>)}
        </div>;
}
