import React, { Component } from 'react';
import api from './api';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

class App extends Component {

  


 render() {

   return(
    <>
    <Cabecalho />
    <Container />
  </>
   )
    
 
 }
};


export default App;
