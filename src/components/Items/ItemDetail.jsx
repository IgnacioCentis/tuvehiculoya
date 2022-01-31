import React from 'react'
import { Card } from 'react-bootstrap'

const ItemDetail = ({idI}) =>{

 
    return (
        <>
           <Card>
                <Card.Body>
                   <h3>{idI.description}</h3> 
                <Card.Text>
                    {idI.features}
                </Card.Text>
                </Card.Body>
                <Card.Img className="width:25%" variant="bottom" src={idI.photo} fluid />
            </Card>
        </>
    )
}

export default ItemDetail