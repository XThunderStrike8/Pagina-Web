import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/'>
                    <img src='./logo-funlam.png' width='50' />
                </Link>
                <a className="navbar-brand" href="#" style={{ marginLeft: '20px', color:'#cc9969' }}>Barra de Navegación</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/' style={{ color: '#0184a0' }}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Login' style={{ color: '#0184a0' }} >Ingresar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/Contact' style={{ color: '#0184a0' }} >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar
