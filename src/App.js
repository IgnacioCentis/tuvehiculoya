import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import  Container   from 'react-bootstrap/Container'
 
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';


function App() {

  const miEstilo = {backgroundColor: 'blue'}
  return (
    
    <BrowserRouter>
      <Container fluid>
        <NavBar />
        <Routes> {/*incluyo los componentes que van a tener ruteo
                exact patch busca la ruta exacta */}
          {/*<Route exact path='/list' element= {<ItemListContainer mensaje={'CoderHouse'}/>} />*/}
          <Route exact path='/detail' element= { <ItemListContainer /> } />
         
        </Routes>
      </Container>
        <ItemListContainer />     
     {/* <ItemDetailContainer /> */}   
    </BrowserRouter>
   
  );
}

export default App;
