import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'


function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/edson-gomes-5307b21a2/" target='blank'><BsLinkedin /></a>
            <a href="https://github.com/biduedson" target='blank'><FaGithub /></a>
            <a href="https://www.facebook.com/bidu.edson" target='blank'><GrFacebook /></a>
        </div>
    )
}

export default HeaderSocials
