import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProducts from '../getProducts'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {

    const[item,setItem] = useState ({})
    const itemId = '2'
    const {idItem} =useParams();
 
    useEffect(() => {
        getProducts()
        .then((data) =>
        setItem(
            idItem ? data.filter((el)=>el.id === idItem):data
        )
        )
       /*  .then((data) => {
            setItem(data.find((el) => el.id === itemId))
         })*/
         .catch((err) => console.log('Error: '+err))
     }, [])

    return (
        <div>
            <ItemDetail idI={item} />
        </div>
    )
}
