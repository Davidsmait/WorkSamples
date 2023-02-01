import React from 'react'
import {BsLinkedin , BsGithub , BsDribbble} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Davidsmait" target="__blank"> <BsGithub /> </a>
        <a href="https://api.whatsapp.com/send/?phone=527711006533&text&type=phone_number&app_absent=0" target="__blank"> <AiOutlineWhatsApp /> </a>
    </div>
  )
}

export default HeaderSocials