import React from 'react'
import { Tablas } from '../Extras/Tablas'

const inicio = () => {  
  const renderizarTablas = () => {
    // Comprobar si el componente se está renderizando fuera del iframe
    if (window.self === window.top) {
      return <Tablas />;
    }
    // Si se está renderizando dentro del iframe, no renderizar el componente
    return null;
  };

  return (
    <div>
      <h1>Esta es la Pagina de Inicio</h1>
      <img src="lenguajes.png" alt="Lenguajes_De_Programacion" width="600" height="300"></img>
      <h4>Lenguajes De Programación</h4>
      <p>Programación para el desarrollo de compentencias.</p>
      {renderizarTablas()}
      <iframe src="/Home2" width="1000" height="500" border="1" name='iframe_inicio' style={{ border: '1px solid black' }}></iframe>
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        <p>Copyright © Ms Ruben Darío Angel Correa. 2022</p>
        <p>Sabaneta, Antioquia, Colombia</p>
        <p>+573017871669</p>
      </footer>
    </div>
  )
}

export default inicio