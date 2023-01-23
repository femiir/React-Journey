import React from 'react'
import logo from './assets/logo.svg'

const Header = () => {
    return (
        <div className='navbar'>
            <nav className='navbar--header'>
                <img src={logo} className="navbar--icon" alt="Vite logo" />
                <h3>Ambience</h3>
                <h4>Drones Scapes</h4>
            </nav>
        </div>

    )
}

export default Header