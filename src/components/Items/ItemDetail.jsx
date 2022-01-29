import React from 'react'

const ItemDetail = ({idI}) =>{

    //const {name,description,price} = idI
    console.log('este es el id '+idI.id)
    return (
        <>
           <div>
               <h2>Detalle del Producto</h2>
                <h4>{idI.name}</h4>
                <h4>{idI.categoria}</h4>
            </div>
        </>
    )
}

export default ItemDetail