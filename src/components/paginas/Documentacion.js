import React from 'react'
import { Tablas } from '../Extras/Tablas'

export const Documentacion = () => {
    const renderizarTablas = () => {
        if (window.self === window.top) {
            return <Tablas />;
        }
        return null;
    };
  return (
    <div>
        <h1>Esta es la pagina de Documentacion sobre el proyecto</h1>
        <p1>Encontraras una tabla con los nombres de los documentos, solo presione click en el 
            documento que le interesa y se le desplegara enseguida.</p1>
        {renderizarTablas()}
        <iframe src='/Curso' width="1000" height="1000" border="1" name='iframe_documentacion' style={{border: '1px solid black'}}></iframe>
        <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        <img src="UAmigo.png" alt="UAmigo_Logo" style={{ width: '10x', height: '50px', }} />
        <p> @Copyright Juan David Ordosgoitia Salgado </p>
      </footer>  
    </div>
  )
}
export default Documentacion