import React from 'react'

export const Tablas = () => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>
                            <a href='/CSS' target='iframe_inicio' style={{ color: 'black' }}>
                                Aplicación de hojas de estilo (CSS) </a>
                        </td>
                        <td>
                            <a href='/Javascript' target='iframe_inicio' style={{ color: 'black' }}>
                                Introducción a Javascript</a>
                        </td>
                        <td>
                            <a href='/React' target='iframe_inicio' style={{ color: 'black' }}>
                                React</a>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/Informacion' target='iframe_inicio' style={{ color: 'black' }}>
                                Manipulación de información en el lado del cliente </a>
                        </td>
                        <td>
                            <a href='/WebApps' target='iframe_inicio' style={{ color: 'black' }}>
                                WebApps </a>
                        </td>

                        <td>
                            <a href='/NodeJS' target='iframe_inicio' style={{ color: 'black' }}>
                                NodeJS. Comunicación síncrona y asíncrona </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/JServidor' target='iframe_inicio' style={{ color: 'black' }}>
                                Javascript del lado del servidor</a>
                        </td>
                        <td>
                            <a href='/Sockets' target='iframe_inicio' style={{ color: 'black' }}>
                                Sockets</a>
                        </td>
                        <td>
                            <a href='/Datos' target='iframe_inicio' style={{ color: 'black' }}>
                                Conexión con bases de datos </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/Frameworks' target='iframe_inicio' style={{ color: 'black' }}>
                                Frameworks MVC populares en la actualidad </a>
                        </td>
                        <td>
                            <a href='/APIs' target='iframe_inicio' style={{ color: 'black' }}>
                                Creación de APIs </a>
                        </td>
                        <td>
                            <a href='/MVC' target='iframe_inicio' style={{ color: 'black' }}>
                                Qué es MVC </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/Spring' target='iframe_inicio' style={{ color: 'black' }}>
                                Conexión a bases de datos con Spring </a>
                        </td>
                        <td>
                            <a href='/SpringFR' target='iframe_inicio' style={{ color: 'black' }}>
                                Introducción al desarrollo con Spring Frameworks </a>
                        </td>
                        <td>
                            <a href='/WebSpring' target='iframe_inicio' style={{ color: 'black' }}>
                                Construcción de servicios web con Spring </a>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <a href='/Plantilla' target='iframe_inicio' style={{ color: 'black' }}>
                                Plantillas y generadores de vistas </a>
                        </td>
                        <td>
                            <a href='/Curso' target='iframe_inicio' style={{ color: 'black' }}>
                                Información sobre el curso </a>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <style>
                {`
          .table-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          table {
            border-collapse: collapse;
            width: 80%;
            max-width: 800px;
          }

          th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }

          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
        `}
            </style>
        </div>
    )
}
