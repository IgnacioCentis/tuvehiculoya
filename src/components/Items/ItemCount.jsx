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
                <Button onClick={handlerCountLess} variant="outline-secondary" id="button-less">-</Button>
                <FormControl
                value={count}
                aria-label="" 
                aria-describedby="basic-addon1"
                />
                <Button onClick={handlerCountAdd} variant="outline-secondary" id="button-add">+</Button>
                <Button onClick={agregar } variant="outline-primary" >Agregar al Carrito</Button> 
            </InputGroup>
            
        </div>
    )
}

export default ItemCount
