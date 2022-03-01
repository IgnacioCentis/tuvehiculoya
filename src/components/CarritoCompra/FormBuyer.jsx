import React from 'react';
import { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { NewOrder } from '../Orders/NewOrder';


export default function FormBuyer() {

    const [dataForm,setDataForm] =  useState({email:'', name:'', tel:''})
    const [verifyEmail, setVerifyEmail] = useState({status:false,detail:'Ingrese nuevamente el email',style:'light'})
    const {cartList, sumPrice ,emptyCart,addOrder}= useCartContext()
    
    
    const handleChange = (event) =>{
        setDataForm({...dataForm,[event.target.name]:event.target.value})
    }

    async function ValidateEmail(event){
        event.preventDefault()
       
        if(event.target.value === dataForm.email){       
            setVerifyEmail({status:true,detail:'Correcto',style:'success'})
        }else{         
            setVerifyEmail({status:false,detail:'Los emails no coinciden!',style:'warning'})
        }
    }

    async function CreateOrder(e){
        e.preventDefault()
        if(verifyEmail.status){
            NewOrder(dataForm,cartList,sumPrice,emptyCart,addOrder)
        } 
    }

  
    return <>
        <Form onSubmit={CreateOrder}> 
            <Form.Group className="mb-3" controlId="idEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control  name="email" type="email" placeholder="Ingrese su email" onChange={handleChange} defaultValue={dataForm.email}  />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="idEmailVerif">
                <Form.Label>Email Verificacion</Form.Label>
                <Form.Control name="emailVerif" type="email" placeholder="Repita el email" onChange={ValidateEmail}   />
               
                <Alert className='small mt-1'  variant={verifyEmail.style}>
                     {verifyEmail.detail}
                </Alert> 
            </Form.Group>

            <Form.Group className="mb-3" controlId="idName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control name="name" type="name" placeholder="Nombre completo" onChange={handleChange}  defaultValue={dataForm.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="idTel">
                <Form.Label>Telefono de contacto </Form.Label>
                <Form.Control name="tel" type="number" placeholder="+54 " onChange={handleChange}  defaultValue={dataForm.tel} />
            </Form.Group>
            <Button type="submit" >Realizar compra</Button>
        </Form>
    </>;
}
