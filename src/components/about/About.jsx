import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {AiOutlineCode} from 'react-icons/ai'
import {TbCode} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <TbCode className="about__icon "/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card' >
              <AiOutlineCode className="about__icon "/>
              <h5>Proyects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo voluptatum modi. Minus ut sit laboriosam, nam nulla labore vitae, quo voluptate quaerat at ducimus suscipit rerum, cumque fugiat debitis!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About