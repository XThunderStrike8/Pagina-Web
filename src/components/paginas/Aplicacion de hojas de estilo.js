import React from 'react';

function AplicacionDeHojasDeEstilo() {
    return (
        <div>
            {/* Elementos */}
            <hr />
            <h1 style={{ color: 'red', textAlign: 'center' }}>Elementos</h1>
            <h1>Header con h1</h1>
            <h2>Header con h2</h2>
            <h3>Header con h3</h3>
            <h4>Header con h4</h4>
            <h5>Header con h5</h5>
            <h6>Header con h6</h6>
            <p>Este es un párrafo</p>
            <hr />

            {/* Enlaces */}
            <hr />
            <h1 style={{ color: 'red', textAlign: 'center' }}>Enlaces</h1>
            <a href="https://www.w3schools.com/default.asp">Visit W3Schools</a>
            <hr />

            {/* Imagen */}
            <hr />
            <h1 style={{ color: 'red', textAlign: 'center' }}>Imagen</h1>
            <img src="nier.jpg" width="600" height="300" alt="nier" />
            <hr />

            {/* Estilos */}
            <hr />
            <h1 style={{ color: 'red', textAlign: 'center' }}>Aplicando Estilos</h1>
            <h1 style={{ fontSize: '300%' }}>Heading 1</h1>
            <h1 style={{ color: 'red', textAlign: 'center' }}>Párrafos</h1>
            <p style={{ fontSize: '300%' }}>
                This is <br />a paragraph <br /> with line <br />breaks.
            </p>
            <h1 style={{ backgroundColor: 'bisque' }}>This is a heading</h1>
            <p style={{ backgroundColor: 'red' }}> This is a paragraph</p>
            <h1 style={{ color: 'blue', fontSize: '60px' }}>
                This is a heading. Font.Size 60px
            </h1>
            <h1 style={{ fontSize: '300%' }}>
                This is a heading. Font-size 300%
            </h1>
            <p style={{ fontSize: '500%' }}> This is a paragraph. Font-size 500%</p>
            <h1 style={{ textAlign: 'right' }}>Alineado a la derecha.</h1>
            <h1 style={{ color: 'red', textAlign: 'left', fontSize: '250%' }}>
                Alineado a la izquierda.
            </h1>
            <hr />

            {/* Chapter Summary */}
            <h1 style={{ textAlign: "center", color: "red" }}>Chapter Summary. Alineado al centro</h1>
            <hr />
            <p>Use the style attribute for styling HTML elements Use background-color for background color Use color for text colors Use font-family for text fonts Use font-size for text sizes Use text-align for text alignment</p>
            <b>-Bold Text</b> <br />
            <strong>-Important Text </strong> <br />
            <i>-Italic Text</i> <br />
            <em>-Emphasized text</em> <br />
            <mark>-Marked Text</mark> <br />
            <small>-Smaller Text</small> <br />
            <del>-Deleted Text</del> <br />
            <ins>-Inserted Text</ins> <br />
            <p>Texto con sub <sub>-Subscript text</sub> </p>
            <p>Texto con sup <sup>-Superscript text</sup> </p>
            <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
            <address>
                Written by John Doe.<br />
                Visit us at:<br />
                Example.com<br />
                Box 564, Disneyland<br />
                USA
            </address>
            <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>

            <h1 style={{ textAlign: "left" }}>Hojas de Estilo</h1>
            <h1 style={{ color: "blue", textAlign: "left" }}>A blue heading</h1>
            <p style={{ color: "red", textAlign: "left" }}>A red paragraph</p>

            <h1 style={{ textAlign: "center", color: "red" }}>Tablas</h1>
            <table>
                <tr>
                    <th>Person 1</th>
                    <th>Person 2</th>
                    <th>Person 3</th>
                </tr>
                <tr>
                    <td>Emil</td>
                    <td>Tobias</td>
                    <td>Linus</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>14</td>
                    <td>10</td>
                </tr>
            </table>
        </div>
    );
}
export default AplicacionDeHojasDeEstilo;
