import React from "react"
import {  Card,   ListGroup, ListGroupItem,   Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
 
const Item = ({id, categoria,name,description,price,photo,stock}) =>{

    return (
        <>      
            <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description} 
                </Card.Text>
                </Card.Body>        
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio $ {price}</ListGroupItem>
                    <ListGroupItem>Categoria: {categoria}</ListGroupItem>
                    <ListGroupItem>Stock: {stock}</ListGroupItem>
                </ListGroup>
               
                <Card.Body>
                <div className="d-grid gap-2">                                   
                <LinkContainer to={`/detalle/${id}`}>
                    <Button title="Conocer más sobre el producto" variant="primary">  VER MAS  </Button>    
                </LinkContainer>                                
                         
                </div>
                </Card.Body>
            </Card>
                
        </>
    )
}

export default Item;