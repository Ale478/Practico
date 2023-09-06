import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './componentes/PrimerComponente';
import { SegundoComponente } from './componentes/SegundoComponente';
import BotonContador from './componentes/BotonContador';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hola mundo!
      </p>
      
      <BotonContador/>
      <PrimerComponente/>
      <SegundoComponente/>
      

    </header>
  </div>
  );
}

export default App;
