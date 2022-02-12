import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({idI}) =>{

    const {agregarAlCarrito} = useCartContext()
    const [contador, setContador] = useState(0)
    
    //cartCant : cantidad de items en el carrito
    //contador: cantidad seleccionado del item actual

    function onAdd (cant){
       setContador(cant)// lo utilizo para verificar que tenga item actual cargado para continual la compra o finalizar
       agregarAlCarrito({item:idI,quantity:cant})
    }

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
                <Card.Body>
                    {
                        contador === 0 ? 
                        <ItemCount stock={idI.stock} onAdd={onAdd}/> : 
                        <>
                            <LinkContainer to='/Cart'>
                                <Button className='mx-4'>Finalizar</Button>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Button className='btn-secondary'>Continuar comprando</Button>
                            </LinkContainer>
                        </>
                    }
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail