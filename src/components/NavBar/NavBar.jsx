import React from 'react'
import  Container   from 'react-bootstrap/Container'
import   Nav   from 'react-bootstrap/Nav'
import   Navbar   from 'react-bootstrap/Navbar'
import CartWidget from '../CarritoCompra/CartWidget'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
    return (
    <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand ><Link to ='/'><img    
                    title = "Ir al inicio" 
                    alt=""
                    src="../assets/image/brand.png"
                    width="55"
                    height="45"
                    className="d-inline-block align-top ">  
                </img></Link>
               
                </Navbar.Brand>
                 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
               <Nav>
                    <LinkContainer title="Ver Bicicletas" to='/bicicletas/bicicleta'>
                        <Nav.Link>Bicicletas</Nav.Link>
                    </LinkContainer>                     
               </Nav>
               <Nav>                  
                   <LinkContainer  title="Ver Monopatines" to='/monopatines/monopatin'>
                        <Nav.Link>Monopatines</Nav.Link>
                    </LinkContainer>                  
               </Nav>
               <Nav>                   
                    <LinkContainer  title="Ver Triciclos" to='/triciclos/triciclo'>
                        <Nav.Link>Tricilos</Nav.Link>
                    </LinkContainer>   
               </Nav>             
                </Navbar.Collapse>
                <Nav>
                    <LinkContainer  title="Ir al carrito" to='/Cart'>
                        <Nav.Link><CartWidget /></Nav.Link>
                    </LinkContainer>       
                </Nav>
            </Container>
            </Navbar>
      </>
    )
}

export default NavBar