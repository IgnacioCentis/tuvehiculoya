import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getProducts from '../getProducts'
import ItemList from './ItemList'


export default function ItemListContainer() {

    //hago persistente los datos
    const [items, setItems] = useState([])

    const {idCategoria} =useParams();
     
    useEffect(() => {
       getProducts()
        //.then((data) => setItems(data))
        .then((data) =>
            setItems(
                idCategoria ? data.filter((el)=>el.categoria === idCategoria):data ))
        .catch((err) => console.log('Error: '+err))
    }, [idCategoria])
  
 
    return(
        <>   
            <Row>
                <Col></Col>
                <Col> <h3>Listado de {idCategoria}</h3></Col>
                <Col></Col>
            </Row> 
            
           <ItemList listProducts={items} /> 
        </>
        
    )
   
}
