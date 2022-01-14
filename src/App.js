import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import  Container   from 'react-bootstrap/Container'
import ItemListContainer from './components/NavBar/ItemListContainer';



function App() {

  const miEstilo = {backgroundColor: 'blue'}
  return (
    
  /* <div  className="App"  style={miEstilo}>
      <img src='assets/image/brand_mini.png' className='w-1'></img>
     <h3>TuVehiculoYA!</h3> 
      <NavBar /> 
    </div>
      */

    <Container fluid>

      <NavBar />
      <ItemListContainer mensaje={'CoderHouse'}/>
    </Container>
    
  );
}

export default App;
