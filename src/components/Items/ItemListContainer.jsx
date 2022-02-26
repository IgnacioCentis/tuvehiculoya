import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getProducts from '../../utilities/getProducts'
import ItemList from './ItemList'

export default function ItemListContainer() {

    //hago persistente los datos
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} =useParams();

    
    useEffect(()=>{
        
       const type = (idCategoria? 'category': '')
        getProducts(type,idCategoria)
        .then(resp => setItems( resp.docs.map(product => ( { id: product.id, ...product.data() } )  ) ))
 
        .catch((err) =>console.log(err))
        .finally(()=>setLoading(false))

    }, [idCategoria])   
   

    //Sin fireStore
  /*  useEffect(() => {
       getProducts()
        //.then((data) => setItems(data))
        .then((data) =>
            setItems(
                idCategoria ? data.filter((el)=>el.categoria === idCategoria):data ))
        .catch((err) => console.log('Error: '+err))
        .finally(()=>setLoading(false))
    }, [idCategoria])
    
     */
    return(
        <>   
            <Row className='mt-3 mb-3'>
                <Col></Col>
                <Col>  {loading?<h3>Cargando...</h3>:<h3>Listado de Productos</h3>}</Col>
                <Col></Col>
            </Row> 
            <Row className='mt-1 mb-1'>
                <Col></Col>
                <Col> <h4>{idCategoria}</h4> </Col>
                <Col></Col>
            </Row>
            
            <ItemList listProducts={items} /> 
        </>
        
    )
   
}
