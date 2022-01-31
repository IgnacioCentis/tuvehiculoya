import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import getProducts from '../getProducts'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {

    const[item,setItem] = useState ([])
    const {idItem} =useParams();
 
    useEffect(() => {
        getProducts()
        .then((data) =>
            setItem(
                 data.find((el)=>el.id === idItem)))
         .catch((err) => console.log('Error: '+err))
     }, [idItem])

     console.log('El objeto idItem es '+item)
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col> <h3>Detalle del  {item.name}</h3></Col>
                    <Col></Col>
                </Row> 
                <Row>
                    <Col></Col>
                    <Col><ItemDetail idI={item} /></Col>
                    <Col></Col>
                </Row>
                 
            </Container>
           
        </div>
    )
}
