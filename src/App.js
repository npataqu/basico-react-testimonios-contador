import './App.css';
import logo from "./Images/nelson.png";
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import { useState } from 'react';

function App() {
// En la linea nueve se hace uso del useState
const [numClics, setNumClics] = useState(0);

const manejarClic= ()=>{
 setNumClics(numClics + 1) ;
}

const reiniciarContador = ()=>{
 setNumClics(0);
}

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo-nelson'
          src={logo}
          alt='Logo de nelson pataquiva'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}
        />
        <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={ manejarClic }
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={ reiniciarContador }
        />
      </div>
      
    </div>
  );
}

export default App;
