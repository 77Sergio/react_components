import React, { Component } from 'react';
import Hola2 from './components/Hola2';
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteEdad from './components/ComponenteEdad';
import ComponentPerro1 from './components/ComponentPerro1';
import ComponentPerro2 from './components/ComponentPerro2';

function App() {
  return (
    <div className="App">
      <h1>Props componente padre a hijo</h1>
      <Hola2 nombre= {'Manolo'} />
      <ComponenteFuncional apellido={"castaneda"}/>
      <ComponenteEdad edad={49}/>
      <ComponentPerro1 perro1={"Maya"}/>
      <ComponentPerro2 perro2={"Loco"}/>
    </div>
  );
}

export default App;