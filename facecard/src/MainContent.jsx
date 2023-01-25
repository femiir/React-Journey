import React from 'react'
import { GrMail } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'

const MainContent = () => {
    return (

        <div className='main'>
            <h1 className='main--title'>femiir</h1>
            <h3 className='main--subtitle'>your limits your imagination</h3>
            <h3 className='main--text'>the future is now</h3>
            <div className='main--socials'>
                <button className='main--mail'><GrMail /> Email</button>
                <button className='main--linkedin' > <FaLinkedin /> Linkedin</button>
            </div>
            <div className='main--content'>
                <h1>About</h1>
                <p>
                    Oluwafemi is a self motivated developer with the ability to multitask, work to organize self and others to deliver timely under high pressure and critical enviroment.
                </p>
                <h1>
                    Interests
                </h1>
                <p>
                    Knowledge, Love, Truth, Justice, Peace, Freedom, and Prosperity.

                </p>

            </div>
        </div >
    )
}

export default MainContent