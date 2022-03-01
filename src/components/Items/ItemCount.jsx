import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
 

const ItemCount = ({stock, onAdd}) => {


    const [count,setCount] = useState(1)

    const handlerCountAdd = () => {
        if(count < stock){
            setCount(count +1)
        } 
    }
    const handlerCountLess = () => {
        if (count >0){setCount(count -1)}  
    }

    const agregar =()=>{
        onAdd(count)  
    }
    
   
    return (
        <div>
            <InputGroup className="mb-3">
                <Button onClick={handlerCountLess} title="Quitar al carrito" variant="outline-secondary" id="button-less">-</Button>
                <FormControl
                    placeholder={count}
                    aria-describedby="basic-addon1"
                />
                <Button onClick={handlerCountAdd} title="Sumar al carrito" variant="outline-secondary" id="button-add">+</Button>
                <Button onClick={agregar } title="Agregar cantidad al carrito" variant="outline-primary" >Agregar al Carrito</Button> 
            </InputGroup>
            
        </div>
    )
}

export default ItemCount
