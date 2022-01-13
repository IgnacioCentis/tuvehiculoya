import React from 'react'
import  Col  from 'react-bootstrap/Col'
import  Row  from 'react-bootstrap/Row'
import  Container  from 'react-bootstrap/Container'

const ItemListContainer = () => {
    return (
        <div>
            <Container fluid>

           
            <Row>
            <Col  sm={4}> Bienvenidos </Col>
            <Col sm={8}>  <h4>TuVehiculoYA!</h4></Col>
            </Row>
            </Container>
        </div>
    )
}

export default ItemListContainer
