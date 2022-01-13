import React from 'react'

//EN ESTA LINEA IMPORTO TODA LA LIBRERIA BOOTSTRAP PERO SOLO USO LA SELECCION
//import { Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap'

//DE ESTA FORMA SOLO IMPORTO LO QUE UTILIZO
import  Container   from 'react-bootstrap/Container'
import   Nav   from 'react-bootstrap/Nav'
import   Navbar   from 'react-bootstrap/Navbar'
import CartWidget from '../CarritoCompra/CartWidget'

const NavBar = () => {
    return (

        <Navbar bg="primary" variant="dark">
            <Container >
            <Navbar.Brand href="#home">
                <img     alt=""
                    src="assets/image/brand.png"
                    width="55"
                    height="45"
                    className="d-inline-block align-top ">
                </img> </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">TuVehiculoYa!</Nav.Link>
                <Nav.Link href="#nuevos">Bicicletas</Nav.Link>
                <Nav.Link href="#usado">Monopatines</Nav.Link>
                <Nav.Link href="#usado">Triciclos</Nav.Link>
    
            </Nav>
            </Container>
            <Nav>
                <Nav.Link href="#deets"><CartWidget /></Nav.Link>
 
            </Nav>
        </Navbar>
         
    )
}

export default NavBar