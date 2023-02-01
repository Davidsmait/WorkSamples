import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'> Download CV </a>
      <a href="https://api.whatsapp.com/send/?phone=527711006533&text&type=phone_number&app_absent=0" target="__blank" className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA