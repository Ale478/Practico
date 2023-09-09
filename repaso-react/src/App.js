import './App.css';
import Componente from './componentes/Componente';
import { GlobalStyle } from './componentes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from './componentes/Theme';


function App() {

  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme = {Theme}>
      <Componente/>
      </ThemeProvider>
    </>
  );
}

export default App;

