import React from 'react'

const ItemDetail = ({idI}) =>{

    //const {name,description,price} = idI
    console.log(idI)
    return (
        <>
           <div>
               <h2>hola</h2>
                <h4>{idI.name}</h4>
            </div>
        </>
    )
}

export default ItemDetail