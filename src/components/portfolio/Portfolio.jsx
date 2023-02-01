import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import {AiFillHtml5 } from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TinCat',
    paragraph: 'I build this project as part of the eighth part of the Web Design module from Web Development Bootcamp on Udemy, it was built with color theory and UX design in mind.',
    github: 'https://github.com/Davidsmait/TinDog',
    demo: 'https://tincatpage.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'DrumKit tiner app',
    paragraph: 'This is a drum kit that tries to imitate a real drum kit made with html, css & js.',
    github: 'https://github.com/Davidsmait/Drum-Kit',
    demo: 'https://drumkitpage.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personal Website',
    paragraph: 'This is my personal website that contains a portfolio and resume. I built it with React with some features like dynamic items and hooks.',
    github: 'https://github.com/Davidsmait/WorkSamples',
    demo: '#'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>

       <div className="container portfolio__container">
          {
             data.map(({id, image, title, paragraph , github, demo}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <p className='portfolio_paragraph' >{paragraph}</p>
                  <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="__blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="__blank" >{demo === '' ? '': 'Live Demo'}</a>
                  </div>
                </article>
              )
             })
          }        
       </div>
    </section>
  )
}

export default Portfolio