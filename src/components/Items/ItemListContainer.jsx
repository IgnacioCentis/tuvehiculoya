import React, { useState, useEffect } from 'react'
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
            idCategoria ? data.filter((el)=>el.categoria === idCategoria):data
        )
        )
        .catch((err) => console.log('Error: '+err))
    }, [])
  
 
    return(
        <>
           
           <ItemList listProducts={items} /> 
        </>
        
    )
   
}
