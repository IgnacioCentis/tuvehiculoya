import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../getProducts'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {

    const[item,setItem] = useState ({})
    const {idItem} =useParams();
 
    useEffect(() => {
        getProducts()
        .then((data) =>
            setItem(
                idItem ? data.filter((el)=>el.id === idItem):data))
         .catch((err) => console.log('Error: '+err))
     }, [idItem])

    return (
        <div>
            <ItemDetail idI={item} />
        </div>
    )
}
