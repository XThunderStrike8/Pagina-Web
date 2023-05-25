import React, {Component} from 'react'

class Propuesta extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../docs/Propuesta.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                </object>
            </div>
        );

    }
}

export default Propuesta