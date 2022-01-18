import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'


const ItemCount = ({stock}) => {

    const [count,setCount] = useState(0)
    const handlerCountAdd = () => {
        if(count < stock){
            setCount(count +1)
        }
       
    }

    const handlerCountLess = () => {
        if (count >0){setCount(count -1)}
        
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
            </InputGroup>
            
        </div>
    )
}

export default ItemCount
