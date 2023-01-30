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
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Bootstap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <HiBadgeCheck className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
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
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience__details'>
                <HiBadgeCheck className='experience__details-icon' />
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience