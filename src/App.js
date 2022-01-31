 
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

  //console.log(cartContext)
  return (
    
    <BrowserRouter>
     {/* <cartContext.Provider> */}{/* es el contexto del cart, que va a servir para todos los componentes encerrados en el */}
        <Container fluid>
          <NavBar />
          <Routes> 
            {/*incluyo los componentes que van a tener ruteo exact patch busca la ruta exacta */}
            <Route  path='/' element= {<ItemListContainer/>} />
            <Route  path='/bicicletas/:idCategoria' element= {<ItemListContainer/>} />
            <Route  path='/monopatines/:idCategoria' element= {<ItemListContainer/>} />
            <Route  path='/triciclos/:idCategoria' element= {<ItemListContainer/>} />
            <Route  path='/detalle/:idItem' element= { <ItemDetailContainer  /> } />
          
          </Routes>
        </Container>
        {/*  <ItemListContainer />     
        <ItemDetailContainer /> */} 
      {/*</cartContext.Provider>  */}
    </BrowserRouter>
   
  );
}

export default App;
