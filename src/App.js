import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/paginas/Inicio';
import Login from './components/paginas/Login';
import Introduccion_a_JavaScript from './components/paginas/Introducción a Javascript';
import AplicacionDeHojasDeEstilo from './components/paginas/Aplicacion de hojas de estilo';
import REACT from './components/paginas/REACT.js';
import Manipulacion from './components/paginas/Manipulacion';
import WebApps from './components/paginas/WebApps';
import NodeJS from './components/paginas/Node';
import JavascriptServidor from './components/paginas/Javascript';
import Sockets from './components/paginas/Sockets';
import Datos from './components/paginas/Bases de Datos';
import Frameworks from './components/paginas/Frameworks';
import APIs from './components/paginas/APIs';
import MVC from './components/paginas/MVC';
import Spring from './components/paginas/Spring';
import Spring_Framework from './components/paginas/Spring Frameworks';
import WebSpring from './components/paginas/WebSpring';
import Plantilla from './components/paginas/Plantilla';
import Curso from './components/paginas/Curso';
import About from './components/paginas/About';
import Contact from './components/paginas/Contact';
import Home from './components/paginas/Home';
import Home2 from './components/paginas/Home2';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>       
          <Route path='/' exact Component={Inicio}/>
          <Route path='/Login' Component={Login} />
          <Route path='/About' Component={About} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/Javascript' Component={Introduccion_a_JavaScript} />
          <Route path='/CSS' Component={AplicacionDeHojasDeEstilo} />
          <Route path='/React' Component={REACT} />
          <Route path='/Informacion' Component={Manipulacion} />
          <Route path='/WebApps' Component={WebApps} />
          <Route path='/JServidor' Component={JavascriptServidor} />
          <Route path='/NodeJS' Component={NodeJS} />
          <Route path='/Sockets' Component={Sockets} />
          <Route path='/Datos' Component={Datos} />
          <Route path='/Frameworks' Component={Frameworks} />
          <Route path='/APIs' Component={APIs} />
          <Route path='/MVC' Component={MVC} />
          <Route path='/Spring' Component={Spring} />
          <Route path='/SpringFR' Component={Spring_Framework} />
          <Route path='/WebSpring' Component={WebSpring} />
          <Route path='/Plantilla' Component={Plantilla} />
          <Route path='/Curso' Component={Curso} />
          <Route path='/Home' Component={Home} />
          <Route path='/Home2' Component={Home2} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
