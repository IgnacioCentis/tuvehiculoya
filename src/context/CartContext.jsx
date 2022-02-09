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
            console.log('esta en la lista '+isInCart(item))
            //const myItem = cartList.find((search) => search.item.id === item.item.id)
            //console.log(myItem)
            
           // const newList = cartList
            cartList.map(function (search,index){
               if (isInCart(search)){
                  //TENGO QUE ACTUALIZAR LA CANTIDAD DE LOS ITEM DUPLICADOS, NO ENCOTRE LA MANERA CON EL useState
                  // console.log('encontrado en la cart '+search.item.name)
                  // console.log('encontrado en la cart '+search.quantity)
                  // console.log(newList)
                  // newList[index].item = search
                  // newList[index].quantity = search.quantity + item.quantity   
               }    
           } )
        }else{
            console.log('No se encuentra en la lista'+cartList)
            setCartList([...cartList,item])
            setCartCant(cartCant+item.quantity) 
        }
        

    }

    /*function agregarAlCarrito(item){
        //seto un nuevo array, con el objeto y el item que va a ser la cantidad                  
        //UTILIZAR UN FIND, VERIFICO QUE NO EXISTA EL ARTICULO
        if(cartList.find((search) => search.item.id === item.item.id)  ){
            console.log('esta en la lista'+cartList)
            //ACA TENGO QUE ACTUALIZAR EL QUANTITY EL ITEM

        }else{
            console.log('No se encuentra en la lista'+cartList)
            setCartList([...cartList,item])
            setCartCant(cartCant+item.quantity) 
        }
    }*/


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
