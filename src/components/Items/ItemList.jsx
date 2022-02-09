import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList =({listProducts}) => {
    return(
        <>
            <Container fluid>
                <Row xs={1} md={2} lg={4} className="g-4"> 
                    
                    {listProducts.map((list) =>( 
                        <Col>
                            <Item 
                                id= {list.id}
                                name= {list.name}
                                categoria = {list.categoria}
                                description = {list.description}
                                stock = {list.stock}
                                price = {list.price}
                                photo = {list.photo}
                             /> 
                        </Col> 
                    ))} 
                     
                
            </Row> 
        </Container>
    </>
)}

export default ItemList;