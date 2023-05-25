import React, {Component} from 'react'

class Cronograma_Detallado extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../docs/Cronograma_Detallado.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                </object>
            </div>
        );

    }
}

export default Cronograma_Detallado