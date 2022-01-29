import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import  Container   from 'react-bootstrap/Container'
 
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
//import { cartContext } from './context/CartContext';


function App() {

  const miEstilo = {backgroundColor: 'blue'}

  //console.log(cartContext)
  return (
    
    <BrowserRouter>
     {/* <cartContext.Provider> */}{/* es el contexto del cart, que va a servir para todos los componentes encerrados en el */}
        <Container fluid>
          <NavBar />
          <Routes> 
            {/*incluyo los componentes que van a tener ruteo exact patch busca la ruta exacta */}
            <Route exact path='/' element= {<ItemListContainer/>} />
            <Route exact path='/categoria/:idCategoria' element= {<ItemListContainer/>} />
            <Route exact path='/detalle/:idItem' element= { <ItemDetailContainer  /> } />
          
          </Routes>
        </Container>
        {/*  <ItemListContainer />     
        <ItemDetailContainer /> */} 
      {/*</cartContext.Provider>  */}
    </BrowserRouter>
   
  );
}

export default App;
