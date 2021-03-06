import {createContext,useContext, useState} from "react"
import React from 'react'

const cartContext = createContext([]) //creo el contexto

export function useCartContext(){ //retorno el useContext creado
    return useContext(cartContext)
}

export default function CartContextProvider({children}) {

    
    //creo el estado cartList donde guardar los items seleccionados de manera global
    const[cartList,setCartList] = useState([]) //lista de productos en el carrito
    const[cartCant, setCartCant] = useState(0) //cantidad total de productos
    const[sumPrice,setSumPrice] = useState(0) //precio total orden
    const[idOrder,setIdOrder] = useState('') //numero de orden


    function addOrder(order){
        setIdOrder(order)
        console.log('num orden: '+order)
    }

    
    function sumCartCant(cart, cant, operator){
        //Sumo  y resto  los items agregados o quitado del carrito
        (operator === '+')?setCartCant(cart+cant):setCartCant(cart-cant)
    }
 
    function isInCart (parametro) { 
        const status = cartList.some( i => i.item.id === parametro.item.id)
        // retorna true / false
        return status
    }

    function totalPrice (item, operator){
        //Sumo o resto el valor del item al total del carrito
        (operator === '+')
            ?
                setSumPrice(sumPrice + item.item.price*item.quantity)
            :
                setSumPrice(sumPrice - item.item.price*item.quantity)
         
    }

    function addToCart(item){
        totalPrice(item, '+')

        if (isInCart(item)){      
            const newList = [...cartList]
            newList.map(function (search){      
               if (search.item.id === item.item.id){
                   search.quantity += item.quantity            
               }    
               setCartList(newList)
               sumCartCant(cartCant,item.quantity,'+')                  
           } )
        }else{
          
            setCartList([...cartList,item])
            sumCartCant(cartCant,item.quantity,'+') 
        }  
    }

    const eliminarItem = (item) => {
        //Elimina un item seleccionado del carrito y actualizo el valor total del carrito 
        if (window.confirm("Seguro desea quitar este producto de su carrito?")){
            const newList = [...cartList]
            const itemEliminado =newList.filter(x=>x.item.id !==item.item.id)
            sumCartCant(cartCant,item.quantity,'-')
            return setCartList(itemEliminado)
        }       
    }

    function emptyCart(){
        setCartList([])
        setCartCant()
    }
    
   
     
    return (
        <cartContext.Provider value={{cartList,addToCart, emptyCart,cartCant,eliminarItem,sumPrice,idOrder,setIdOrder,addOrder}}>
            {children}
        </cartContext.Provider>
    )
}
