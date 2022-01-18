import getFetch from "./mockItems"
import React, { useState, useEffect } from "react"
import  Row  from "react-bootstrap/Row"
import  Card  from "react-bootstrap/Card"
import  Col  from "react-bootstrap/Col"
import { ListGroup, ListGroupItem } from "react-bootstrap"

function ComponenteContenedor(){

    //Con UseState hago persistente los datos
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch
        .then(res => setProductos(res))
        .catch(err => console.log(err))
        .finally(()=> console.log('va al final'))
    },[])

    console.log(productos)

    return (
        <div>
            {productos.map(productos => 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={productos.foto} />
                    <Card.Body>
                    <Card.Title>{productos.name}</Card.Title>
                    <Card.Text>
                       {productos.description}
                    </Card.Text>
                    </Card.Body>
          
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>Precio $ {productos.price}</ListGroupItem>
                    <ListGroupItem>Categoria: {productos.categoria}</ListGroupItem>
                    
                    </ListGroup>
                    <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
              </Card> 
            )}

            

        </div>
    )
}

export default ComponenteContenedor