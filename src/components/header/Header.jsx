import React from 'react'
import HeaderSocials from './HeaderSocials'
import CV from './CTA'
import './header.css'
import ME from '../../assets/me.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Aguirre</h1>
        <h5 className='text-light'>Software Developer</h5>
        <CV />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        <a href="#portfolio" className='scroll__down'>Scroll down <AiOutlineArrowRight/></a>
      </div>
    </header>
  )
}

export default Header