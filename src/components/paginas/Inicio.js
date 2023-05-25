import React from 'react'

const inicio = () => {
  return (
    <div>
      <h1 style={{ position: 'relative', top: '25px', left: '-250px', textAlign: 'right' }}>Mapa Interactivo</h1>
      <p style={{ position: 'relative', top: '20px', left: '-140px', textAlign: 'right' }}>A su izquierda puede observar el mapa de la Universidad Catolica Luis Amigo</p>
      <p style={{textAlign: 'right', position:'relative',left:'-154px'}}>para interactuar con el mapa solamente pulse sobre el bloque que desee ir.</p>
      <img src="Mapa.jpg" alt="Mapa_Luis_Amigo" style={{ position: 'relative', top: '-100px', left: '-350px', width: '600px', height: '580px' }} useMap="#mapaInteractivo" />
      <map name="mapaInteractivo">
        <area shape="circle" coords="310,430,18" alt="Bloque 1" href='/Bloque1'/>
        <area shape="circle" coords="312,162,18" alt="Bloque 2" href='/Bloque2'/>
        <area shape="circle" coords="145,257,18" alt="Bloque 3" href='/Bloque3'/>
        <area shape="circle" coords="106,290,18" alt="Bloque 4" href='/Bloque4'/>
        <area shape="circle" coords="133,347,18" alt="Bloque 5" href='/Bloque5'/>
        <area shape="circle" coords="157,399,18" alt="Bloque 6" href='/Bloque6'/>
        <area shape="circle" coords="168,482,18" alt="Bloque 7" href='/Bloque7'/>
      </map>
      <footer style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
        <img src="UAmigo.png" alt="UAmigo_Logo" style={{ width: '10x', height: '50px', }} />
        <p> @Copyright Juan David Ordosgoitia Salgado </p>
      </footer>
    </div>
  )
}

export default inicio