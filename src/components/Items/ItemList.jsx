import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Item from "./Item";

const ItemList =({listProducts}) => {
    return(
        <>
            <Container fluid>
                <Row> 
                    <Col></Col> 
                        {listProducts.map((list) =>(<Col>
                            <Item 
                                id= {list.id}
                                name= {list.name}
                                categoria = {list.categoria}
                                description = {list.description}
                                stock = {list.stock}
                                price = {list.price}
                                photo = {list.photo}
                            /></Col>
                        ))}   
                <Col></Col>
            </Row> 
        </Container>
    </>
)}

export default ItemList;