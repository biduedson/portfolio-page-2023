import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Avatar from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Olá eu sou </h5>
                <h1 className='animation-left'>Edson Gomes</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={Avatar} alt="me" className='animation-zoon' />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
