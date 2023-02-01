import React from 'react'
import './experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience' className='experience__section'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>
            <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Vite</h4>
                </div>
              </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Backend Developmennt</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Node JS</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>npm</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Netlify</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>Git</h4>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>ExpressJS</h4>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience