import React from 'react'
import { BsCart2 } from "react-icons/bs"; //https://react-icons.github.io/react-icons

const CartWidget = () => {
    return (
        <div >
            <BsCart2 size={42} title='Ver tu carrito'/>
        </div>
    )
}

export default CartWidget
