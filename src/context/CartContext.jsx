import {createContext,useContext, useState} from "react"
import React from 'react'
import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min"
import { computeStyles } from "@popperjs/core"


const cartContext = createContext([]) //creo el contexto

export function useCartContext(){ //retorno el useContext creado
    return useContext(cartContext)
}

export default function CartContextProvider({children}) {

    //creo el estado cartList donde guardar los items seleccionados de manera global
    const[cartList,setCartList] = useState([])
    const[cartCant, setCartCant] = useState(0)


 
    function isInCart (parametro) { 
        const status = cartList.some( i => i.item.id === parametro.item.id)
        // retorna true / false
        return status
    }

    function agregarAlCarrito(item){
       
        if (isInCart(item)){
           // console.log('esta en la lista '+isInCart(item))           
            const newList = [...cartList]
            newList.map(function (search,index){
               // console.log({search})
               if (search.item.id === item.item.id){
                   search.quantity += item.quantity
                 
               }    
               setCartList(newList)
              // console.log("cartCant"+cartCant)
              // console.log("item.quantity"+item.quantity)
               setCartCant(cartCant+item.quantity)
           } )
        }else{
            console.log('No se encuentra en la lista'+cartList)
            setCartList([...cartList,item])
            setCartCant(cartCant+item.quantity) 
        }
        

    }

    function sumCantidad(cant){
        //Sumo todos los items agregados al carrito
       // setCartCant(cartCant+cant)
    }

    function vaciarCarrito(){
        setCartList([])
        setCartCant()
    }
     
    return (
        <cartContext.Provider value={{cartList,agregarAlCarrito, vaciarCarrito,sumCantidad,cartCant}}>
            {children}
        </cartContext.Provider>
    )
}
