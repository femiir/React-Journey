import React from 'react'
import logo from '/assets/Logo.png'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header--navbar'>
                <img className='header--logo' src={logo} alt="meme generator face" />
                <h4 className='header--title'>React Practice - yuna 🌖🌚</h4>
            </nav>
        </header>
    )
}

export default Header