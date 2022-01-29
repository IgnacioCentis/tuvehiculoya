import React from 'react'

//EN ESTA LINEA IMPORTO TODA LA LIBRERIA BOOTSTRAP PERO SOLO USO LA SELECCION
//import { Container, Nav, Navbar, NavItem, NavLink } from 'react-bootstrap'

//DE ESTA FORMA SOLO IMPORTO LO QUE UTILIZO
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
                <Navbar.Brand href="#home"><Link to ='/'><img     alt=""
                    src="assets/image/brand.png"
                    width="55"
                    height="45"
                    className="d-inline-block align-top ">
                </img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
               <Nav>
                    <LinkContainer to='/bicicletas/bicicleta'>
                        <Nav.Link>Bicicletas</Nav.Link>
                    </LinkContainer>                     
               </Nav>
               <Nav>                  
                   <LinkContainer to='/monopatines/monopatin'>
                        <Nav.Link>Monopatines</Nav.Link>
                    </LinkContainer>                  
               </Nav>
               <Nav>                   
                    <LinkContainer to='/triciclos/triciclo'>
                        <Nav.Link>Tricilos</Nav.Link>
                    </LinkContainer>   
               </Nav>
                 
              
                </Navbar.Collapse>
                <Nav>
                    <LinkContainer to='/'>
                        <Nav.Link><CartWidget /></Nav.Link>
                    </LinkContainer>       
                </Nav>
            </Container>
            </Navbar>
          
        {/*<Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Link to ='/'><img     alt=""
                    src="assets/image/brand.png"
                    width="55"
                    height="45"
                    className="d-inline-block align-top ">
                </img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">         
                    <Nav.Link href="#home">Home</Nav.Link>              
                    <NavDropdown title="Monopatines" id="basic-nav-monopatines">
                    <NavDropdown.Item href="#monopatines/1">Urbano</NavDropdown.Item>
                    <NavDropdown.Item href="#monopatines/2">Infantiles</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#monopatines/3">Electricos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Triciclos" id="basic-nav-triciclos">
                    <NavDropdown.Item href="#triciclos/1">Urbano</NavDropdown.Item>
                    <NavDropdown.Item href="#triciclos/2">Drift</NavDropdown.Item>
                    <NavDropdown.Item href="#triciclos/3">Infantiles</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#triciclos/4">Electricos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bicicletas" id="basic-nav-bicibletas">
                    <NavDropdown.Item href="#bicicletas/1">Montaña</NavDropdown.Item>
                    <NavDropdown.Item href="#bicicletas/2">Urbana</NavDropdown.Item>
                    <NavDropdown.Item href="#bicicletas/3">Hibridas</NavDropdown.Item>
                    <NavDropdown.Item href="#bicicletas/4">FatBike</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#bicicletas/5">Electricas</NavDropdown.Item>
                </NavDropdown>
               
                </Nav>
                <Nav>
                    <Nav.Link href="#cart"><CartWidget /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
                 
            </Container>
        </Navbar>*/}
      </>
    )
}

export default NavBar