import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import CreateOrder from './CreateOrder';

export default function FormBuyer() {
   const [dataForm,setDataForm] =  useState({
       email:'', name:'', tel:''
   })
  
   const handleChange = (event) =>{
    setDataForm({...dataForm,[event.target.name]:event.target.value})
   }

   console.log('dataForm')
   console.log(dataForm)
  
    return <>
        <Form onSubmit={CreateOrder(dataForm) }> 
            <Form.Group className="mb-3" controlId="idEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Ingrese su email" onChange={handleChange} value={dataForm.email}  />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="idName">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control name="name" type="name" placeholder="Nombre completo" onChange={handleChange}  value={dataForm.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="idTel">
                <Form.Label>Telefono de contacto </Form.Label>
                <Form.Control name="tel" type="number" placeholder="+54 " onChange={handleChange}  value={dataForm.tel} />
            </Form.Group>
            <Button type="submit" >Submit</Button>
        </Form>
    </>;
}
