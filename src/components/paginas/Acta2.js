import React, {Component} from 'react'

class Acta2 extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <object
                    data={require('../docs/Acta2.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                >
                </object>
            </div>
        );

    }
}

export default Acta2