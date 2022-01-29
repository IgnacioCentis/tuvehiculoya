import {createContext,useContext, useState} from "react"
import React from 'react'


const cartContext = createContext([]) //creo el contexto

export function useCartContext(){ //retorno el useContext creado
    return useContext(cartContext)
}


export default function CartContextProvider({chidren}) {
    const[cartList,setCartList] = useState([])

    function agregarAlCarrito(item){
        setCartList(item)
    }

    return (
        <cartContext.Provider value={{cartList,agregarAlCarrito}}>
            {children}
        </cartContext.Provider>
    )
}
