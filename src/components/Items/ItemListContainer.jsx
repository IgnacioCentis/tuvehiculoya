import React, { useState, useEffect } from 'react'
import getProducts from '../getProducts'
import ItemList from './ItemList'


export default function ItemListContainer() {

    //hago persistente los datos
    const [items, setItems] = useState([])
        
     
    useEffect(() => {
       getProducts()
        .then((data) => setItems(data))
        .catch((err) => console.log('Error: '+err))
    }, [])
  
 
    return(
        <>
           
           <ItemList listProducts={items} /> 
        </>
        
    )
   
}
