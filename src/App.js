import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Login from './components/paginas/Login';
import AplicacionDeHojasDeEstilo from './components/paginas/Aplicacion de hojas de estilo';
import Curso from './components/paginas/Curso';
import Contact from './components/paginas/Contact';
import Bloque1 from './components/paginas/Bloque1';
import Bloque2 from './components/paginas/Bloque2';
import Bloque3 from './components/paginas/Bloque3';
import Bloque4 from './components/paginas/Bloque4';
import Bloque5 from './components/paginas/Bloque5';
import Bloque6 from './components/paginas/Bloque6';
import Bloque7 from './components/paginas/Bloque7';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>       
          <Route path='/' exact Component={Inicio}/>
          <Route path='/Login' Component={Login} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/CSS' Component={AplicacionDeHojasDeEstilo} />
          <Route path='/Curso' Component={Curso} />
          <Route path='/Bloque1' Component={Bloque1} />
          <Route path='/Bloque2' Component={Bloque2} />
          <Route path='/Bloque3' Component={Bloque3} />
          <Route path='/Bloque4' Component={Bloque4} />
          <Route path='/Bloque5' Component={Bloque5} />
          <Route path='/Bloque6' Component={Bloque6} />
          <Route path='/Bloque7' Component={Bloque7} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
