import { addDoc, collection, documentId, getDocs, getFirestore, orderBy, query, where, writeBatch } from 'firebase/firestore';
import React from 'react';
import { createContext } from 'react';
import { Button } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';

 
const CreateOrder = async (buyer) =>{
    const {cartList} = useCartContext()
    const {vaciarCarrito} = createContext()
    try{
      //  const realizarCompra = async (e) =>{
           // e.preventDefault()

            //nuevo objeto de orden
            let order = {}

            order.buyer =buyer //{name: 'Ignacio', email: 'emailgmail.com', phone:'0225148554'}
            order.total = '5000.00' //deberia utilizar la funcion q me trae el valor total de la compra

            order.items = cartList.map(cartItem =>{
                const id = cartItem.item.id;
                const name = cartItem.item.name;
                const price = cartItem.item.price * cartItem.quantity;
                const cant = cartItem.quantity;
                return {
                    id,
                    name,
                    price
                }
            })
            console.log('cartlist:')
            console.log(cartList)
            console.log('orden:')
            console.log(order)

            //Cargo la orden en la BD
            const db = getFirestore()
            const orderCollections = collection(db,'orders')
            await addDoc(orderCollections,order)
            .then(resp => console.log(resp))

            //Actualizo los Stock en la BD

            const queryCollections = collection(db,'items')
            const queryUpdateStock = query(queryCollections, where(documentId(), 'in', cartList.map(it => it.item.id)))

            const batch = writeBatch(db)
            await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
                stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
            })))
            .catch(err=>console.log("Error conexion update stock "+err))
            .finally(()=>console.log("Stock actualizado"))
            batch.commit()
            vaciarCarrito()
            return (console.log('Orden Procesada'))
      //  }
    }
    
    catch{
        console.log('error No se pudo crear la orden')
    }
   
 

}

export default CreateOrder;