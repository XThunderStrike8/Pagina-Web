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
import Documentacion from './components/paginas/Documentacion';
import Propuesta from './components/paginas/Propuesta';
import ActaInauguracion from './components/paginas/ActaInauguracion';
import MatrizHabilidades from './components/paginas/MatrizHabilidades';
import Metodologia from './components/paginas/Metodologia';
import Estimacion_Alto_Nivel from './components/paginas/Estimacion de alto nivel';
import Estimacion_Detallada from './components/paginas/Estimacion Detallada';
import Cronograma_Detallado from './components/paginas/Cronograma detallado';
import MRiesgos from './components/paginas/Matriz de Riesgos';
import Metricas_Proyecto from './components/paginas/Metricas Proyecto';
import KPIS from './components/paginas/KPIS';
import Acta2 from './components/paginas/Acta2.js';
import Acta3 from './components/paginas/Acta3.js';
import Acta4 from './components/paginas/Acta4.js';
import MatrizResponsabilidades from './components/paginas/Matriz Responsabilidades';

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
          <Route path='/Documentacion' Component={Documentacion} />
          <Route path='/Propuesta' Component={Propuesta} />
          <Route path='/AInauguracion' Component={ActaInauguracion} />
          <Route path='/MatrizHabilidades' Component={MatrizHabilidades} />
          <Route path='/Metodologia' Component={Metodologia} />
          <Route path='/EstimacionAlto' Component={Estimacion_Alto_Nivel} />
          <Route path='/EstimacionDetallada' Component={Estimacion_Detallada} />
          <Route path='/CronogramaDetallado' Component={Cronograma_Detallado} />
          <Route path='/MatrizRiesgos' Component={MRiesgos} />
          <Route path='/MetricasProyecto' Component={Metricas_Proyecto} />
          <Route path='/KPIS' Component={KPIS} />
          <Route path='/Acta2' Component={Acta2} />
          <Route path='/Acta3' Component={Acta3} />
          <Route path='/Acta4' Component={Acta4} />
          <Route path='/MatrizResponsabilidades' Component={MatrizResponsabilidades} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
