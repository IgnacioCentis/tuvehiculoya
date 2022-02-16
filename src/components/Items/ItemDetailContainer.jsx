import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import getProducts from '../../utilities/getProducts'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {

    const [item,setItem] = useState ([])
    const [loading,setloading]=useState(true);
    const {idItem} =useParams();
  
    useEffect(() => {
        getProducts('idItem',idItem)
         .then(resp => setItem({id:resp.id,...resp.data()} ))
         .catch((err) => console.log('Error: '+err))
         .finally(()=>setloading(false));
     }, [idItem])

    return (

        <>
            <Row className='mt-3 mb-3'>
                <Col></Col>
                <Col>  {loading?<h3>Cargando... </h3>:<h3>Detalle del  {item.name}</h3>} </Col>
                <Col></Col>
            </Row> 
            <Row>
                <Col></Col>
                <Col><ItemDetail idI={item} /></Col>
                <Col></Col>
            </Row>                  
           
        </>
    )
}
