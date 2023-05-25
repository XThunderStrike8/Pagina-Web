import React, {Component} from 'react'

class MatrizHabilidades extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../docs/Matriz_de_habilidades.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                </object>
            </div>
        );

    }
}

export default MatrizHabilidades