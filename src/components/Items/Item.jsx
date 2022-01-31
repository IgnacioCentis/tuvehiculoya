import React from "react"
import {Nav,  Card,   ListGroup, ListGroupItem,   Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
 
import ItemCount from "./ItemCount"
 
const Item = ({id, categoria,name,description,price,photo,stock}) =>{
    return (
        <>      
            <Card style={{ width: '18rem' }}>
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
                    <ItemCount stock={stock}/>
                </Card.Body>
                <Card.Body>
                <div className="d-grid gap-2">                                   
                    <Button variant="primary">                               
                        <LinkContainer to={`/detalle/${id}`}>
                            <Nav.Link>VER MAS</Nav.Link>
                        </LinkContainer>                                
                        </Button> 
                </div>
                </Card.Body>
            </Card>
                
        </>
    )
}

export default Item;