import React from 'react'
import airbnblogo from '/public/assets/airbnb.svg'

const Header = () => {
    return (
        <div>
            <nav>
                <img className='navbar--image' src={airbnblogo} alt="airbnb logo" />
            </nav>
        </div>
    )
}

export default Header