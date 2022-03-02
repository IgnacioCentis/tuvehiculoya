import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import ItemCount from './ItemCount'

const ItemDetail = ({idI}) =>{

    const {addToCart} = useCartContext()
    const [contador, setContador] = useState(0)
    
    //cartCant : cantidad de items en el carrito
    //contador: cantidad seleccionado del item actual

    function onAdd (cant){
       setContador(cant)// lo utilizo para verificar que tenga item actual cargado para continuar la compra o finalizar
       addToCart({item:idI,quantity:cant})
    }

    return (
        <>
           <Card className="h-100" style={{ width: '18rem' }}>
                <Card.Body>
                   <h3>{idI.description}</h3> 
                <Card.Text>
                    {idI.features}
                </Card.Text>
                </Card.Body>
                <Card.Img  variant="bottom" src={idI.photo}  />
                <Card.Body>
                    {
                        contador === 0 ? 
                        <ItemCount stock={idI.stock} onAdd={onAdd}/> : 
                        <>
                            <LinkContainer to='/Cart'>
                                <Button title="Ir al carrito" className='mx-4'>Finalizar</Button>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Button title="Volver al catalogo" className='btn-secondary'>Continuar comprando</Button>
                            </LinkContainer>
                        </>
                    }
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default ItemDetail