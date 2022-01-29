import React from "react"
import {Col, Row, Card, Container, ListGroup, ListGroupItem, InputGroup, Button } from "react-bootstrap"
import ItemCount from "./ItemCount"
 
const Item = ({id, categoria,name,description,price,photo,stock}) =>{
    return (
        <>
        <Container fluid>
            <Row>
                <Col></Col>
                <Col> <h3>Listado de Productos</h3></Col>
                <Col></Col>
            </Row>
           
           </Container>
        <Container fluid>
            <Row> 
                <Col></Col>
                <Col>
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
                            <Button     variant="primary">Ver el Detalle</Button> 
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row> 
        </Container>
        </>
    )
}

export default Item;