import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpeg'
import {AiOutlineCode} from 'react-icons/ai'
import {TbCode} from 'react-icons/tb'
import {SiJavascript, SiExpress, SiTailwindcss} from 'react-icons/si'
import {AiFillHtml5  } from 'react-icons/ai'
import {DiCss3, DiNpm, DiMongodb} from 'react-icons/di'
import {FaReact, FaNodeJs , FaGit} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src="" alt="About image" />
          </div>
        </div> */}
        <div className="about__me">
          <div className="about__me-info">
            <code>
              {"{"}
              <br />
              &nbsp;<div className='about__me-code'>"me"</div>{' : {'}<br />
              &emsp;&nbsp;<div className='about__me-code'>"languages"</div>{' : ["es","en"] ,'}
              <br />&emsp;&nbsp;<div className='about__me-code'>"location"</div>{' : "Mexico"'}
              <br />&nbsp;{"}"}
              <br />

              &nbsp;<div className='about__me-code'>"interests"</div>{' : {'}<br />
              &emsp;&nbsp;<div className='about__me-code'>"books"</div>{' : ["novel","philosophy"] ,'}
              <br />&emsp;&nbsp;<div className='about__me-code'>"guitar"</div>{' : true'}
              <br />&nbsp;{"}"} 

              <br />
              {"}"}  
            </code>
          </div>
        </div>

      

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
              <TbCode className="about__icon "/>
              <h5>Frontend</h5>
              <small>
              <SiJavascript />
              <DiCss3 />
              <AiFillHtml5 />
              <FaReact />
              {/* <SiTailwindcss /> */}
              </small>
            </article>
            <article className='about__card' >
              <AiOutlineCode className="about__icon "/>
              <h5>Backend & Tools</h5>
              <small>
                <FaNodeJs />
                {/* <DiMongodb /> */}
                <SiExpress />
                <DiNpm />
                <FaGit />
              </small>
            </article>
          </div>

          <p>// Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo voluptatum modi. Minus ut sit laboriosam, nam nulla labore vitae, quo voluptate quaerat at ducimus suscipit rerum, cumque fugiat debitis!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About