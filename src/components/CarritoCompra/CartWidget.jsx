import React from 'react'
import { Badge } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs"; //https://react-icons.github.io/react-icons
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cartCant} =  useCartContext()
     
    return (
        <div >
            <Badge variant="primary" pill>
               {cartCant }
            </Badge>
            <BsCart2 size={42} title='Ver tu carrito'/>
        </div>
    )
}

export default CartWidget
