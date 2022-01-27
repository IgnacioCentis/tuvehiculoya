import React, { useState,useEffect } from 'react'
import getProducts from '../getProducts'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer() {

    const[item,setItem] = useState ({})
    const itemId = '2'

    useEffect(() => {
        getProducts()
         .then((data) => {
            setItem(data.find((el) => el.id === itemId))
         })
         .catch((err) => console.log('Error: '+err))
     }, [])

    return (
        <div>
            <ItemDetail idI={item} />
        </div>
    )
}
