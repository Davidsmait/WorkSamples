import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FaReact } from 'react-icons/fa'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Footer = () => {
  return (
      <footer id='footer'>
        <a href="#" className='footer__logo'>David San Luis Aguirre</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://github.com/Davidsmait" target="__blank"><BsGithub/></a>
         
          <a href="https://api.whatsapp.com/send/?phone=527711006533&text&type=phone_number&app_absent=0" target="__blank"><AiOutlineWhatsApp/></a>
        </div>

        <div className="footer__copyright">
          <small>Site made with <FaReact className='footer__copyright-icon' title='React'/></small>
        </div>
      </footer>
  )
}

export default Footer
