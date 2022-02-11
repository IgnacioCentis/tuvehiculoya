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

    function sumCartCant(cart, cant, operador){
        //Sumo  y resto  los items agregados o quitado del carrito
        (operador === '+')?setCartCant(cart+cant):setCartCant(cart-cant)
    }

 
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
              sumCartCant(cartCant,item.quantity,'+')
           } )
        }else{
            console.log('No se encuentra en la lista'+cartList)
            setCartList([...cartList,item])
            sumCartCant(cartCant,item.quantity,'+') 
        }  
    }

    const eliminarItem = (item) => {
        //Elimina un item seleccionado del carrito y actualizo el valor total del carrito
        
            const newList = [...cartList]
            const itemEliminado =newList.filter(x=>x.item.id !==item.item.id)
            console.log('buscando item eliminar')
            sumCartCant(cartCant,item.quantity,'-')
            return setCartList(itemEliminado)
    }

    function vaciarCarrito(){
        setCartList([])
        setCartCant()
    }
     
    return (
        <cartContext.Provider value={{cartList,agregarAlCarrito, vaciarCarrito,cartCant,eliminarItem}}>
            {children}
        </cartContext.Provider>
    )
}
