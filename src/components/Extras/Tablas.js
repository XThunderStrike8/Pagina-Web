import React from 'react'

export const Tablas = () => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>
                            <a href='/Propuesta' target='iframe_documentacion' style={{ color: 'black' }}>
                                Propuesta de proyecto </a>
                        </td>
                        <td>
                            <a href='/AInauguracion' target='iframe_documentacion' style={{ color: 'black' }}>
                                Acta de Inauguración</a>
                        </td>
                        <td>
                            <a href='/MatrizHabilidades' target='iframe_documentacion' style={{ color: 'black' }}>
                                Matriz de Habilidades</a>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href='/Metodologia' target='iframe_documentacion' style={{ color: 'black' }}>
                                Metodologia </a>
                        </td>
                        <td>
                            <a href='/EstimacionAlto' target='iframe_documentacion' style={{ color: 'black' }}>
                                Estimacion de alto nivel </a>
                        </td>

                        <td>
                            <a href='/EstimacionDetallada' target='iframe_documentacion' style={{ color: 'black' }}>
                                Estimacion Detallada</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/CronogramaDetallado' target='iframe_documentacion' style={{ color: 'black' }}>
                                Cronograma Detallado</a>
                        </td>
                        <td>
                            <a href='/MatrizRiesgos' target='iframe_documentacion' style={{ color: 'black' }}>
                                Matriz de Riesgos</a>
                        </td>
                        <td>
                            <a href='/MetricasProyecto' target='iframe_documentacion' style={{ color: 'black' }}>
                                Metricas del Proyecto </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/KPIS' target='iframe_documentacion' style={{ color: 'black' }}>
                                Metricas KPIs </a>
                        </td>
                        <td>
                            <a href='/Acta2' target='iframe_documentacion' style={{ color: 'black' }}>
                                Acta 2 </a>
                        </td>
                        <td>
                            <a href='/Acta3' target='iframe_documentacion' style={{ color: 'black' }}>
                                Acta 3 </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href='/Acta4' target='iframe_documentacion' style={{ color: 'black' }}>
                                Acta 4 </a>
                        </td>
                        <td>
                            <a href='/MatrizResponsabilidades' target='iframe_documentacion' style={{ color: 'black' }}>
                                Matriz de Responsabilidades </a>
                        </td>
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