import React from 'react'
import  Col  from 'react-bootstrap/Col'
import  Row  from 'react-bootstrap/Row'
import  Container  from 'react-bootstrap/Container'

const ItemListContainer = ({mensaje}) => {
    return (
        <div>
            <Container fluid>

           
            <Row>
             <Col  sm={4}><h5>Bienvenidos</h5>  </Col>
            </Row>
            <Row>
            <Col sm={8}><h4> {mensaje}  </h4></Col>
            </Row>
            </Container>
        </div>
    )
}

export default ItemListContainer
