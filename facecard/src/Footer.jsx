import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>

            <h1 className='twitter'><FaTwitterSquare /></h1>
            <h1 className='facebook'><FaFacebookSquare /></h1>
            <h1 className='instagram'><FaInstagramSquare /></h1>
            <h1 className='github'><FaGithubSquare /></h1>

        </div>
    )
}

export default Footer