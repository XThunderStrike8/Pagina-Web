import React, {Component} from 'react'

class ActaInauguracion extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../docs/Acta_Inauguracion.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                </object>
            </div>
        );

    }
}

export default ActaInauguracion