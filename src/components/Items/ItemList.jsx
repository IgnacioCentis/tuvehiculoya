import React from "react";
import Item from "./Item";

const ItemList =({listProducts}) => {
    return(
        <>

        
            {listProducts.map((list) =>(
                <Item 
                    id= {list.id}
                    name= {list.name}
                    categoria = {list.categoria}
                    description = {list.description}
                    stock = {list.stock}
                    price = {list.price}
                    photo = {list.photo}
                />
            ))}
        </>
    )
}


export default ItemList;