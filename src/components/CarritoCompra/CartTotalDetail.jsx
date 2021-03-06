import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
 

export default function CartTotalDetail() {
    
    const{sumPrice,emptyCart,cartCant} = useCartContext()
  
    const preguntaVaciar =()=>{
    
        if (window.confirm("Seguro desea vaciar su carrito?")){
            emptyCart()
          
        }
    }

  return <>   
            <Card style={{ width: '18rem' }}>
                <Card.Header>Tu Compra:</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Total ${sumPrice}</ListGroup.Item>
                    <ListGroup.Item>Cantidad de productos: {cartCant}</ListGroup.Item>
                    <ListGroup.Item> </ListGroup.Item>
                </ListGroup>
            </Card>

            <div  className="d-grid gap-2 mt-2">
                
                <Button onClick={preguntaVaciar} variant="secondary" size="md">Vaciar</Button>
            </div>
            <div  className="d-grid gap-2 mt-2">
             
            </div>
        </>;
}
