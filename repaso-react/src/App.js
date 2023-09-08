import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import BotonContador from './componentes/BotonContador';
import Saludo from './componentes/Saludo';
import Saludo2 from './componentes/Saludo2';
import { useState } from 'react';

function App() {

  const [nombre, setNombre] = useState('');

  const ChangeNameApp = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hola mundo!
      </p>

      <h1>Ejemplo de Props en React con Input</h1>
      <Saludo2 nombre={nombre} ChangeName={ChangeNameApp}/>

      
      <h1>Ejemplo de Props en React</h1>
      <Saludo nombre="Juan" /> {/* Pasamos "Juan" como prop al componente Saludo */}
      <Saludo nombre="María" /> {/* Pasamos "María" como prop al componente Saludo */}

      <BotonContador/>
      <PrimerComponente/>
      <SegundoComponente/>
      

    </header>
  </div>
  );
}

export default App;

