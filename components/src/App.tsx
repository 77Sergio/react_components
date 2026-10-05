import React, { Component } from 'react';
import Hola2 from './components/Hola2';
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteEdad from './components/ComponenteEdad';

function App() {
  return (
    <div className="App">
      <Hola2 nombre= {'Manolo'} />
      <ComponenteFuncional apellido={"castaneda"}/>
      <ComponenteEdad edad={49}/>
    </div>
  );
}

export default App;