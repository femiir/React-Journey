import React from 'react'
import photocard from './assets/card.svg'


const Header = () => {
    const cardStyle = {
        backgroundImage: `url(${photocard})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
    return (
        <div className='card' style={cardStyle}>
        </div>
    )
}

export default Header