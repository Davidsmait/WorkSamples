import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpeg'
import {AiOutlineCode} from 'react-icons/ai'
import {TbCode} from 'react-icons/tb'
import {SiJavascript, SiExpress, SiTailwindcss, SiApachespark, SiAstro} from 'react-icons/si'
import {AiFillHtml5 ,AiTwotoneHeart } from 'react-icons/ai'
import {DiCss3, DiNpm, DiMongodb} from 'react-icons/di'
import {FaReact, FaNodeJs , FaGit} from 'react-icons/fa'
import {GrHadoop} from "react-icons/gr";


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
              &emsp;&nbsp;<div className='about__me-code'>"books"</div>{' : ["novels","philosophy"] ,'}
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
              {/* <AiOutlineCode className="about__icon "/> */}
              <h5>Here are some technologies I've been working with lately: </h5>
              <small>
                <a
                    href="https://spark.apache.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <SiApachespark title="Apache Spark"/>
                </a>
                <a
                    href="https://hadoop.apache.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <GrHadoop title="Hadoop"/>
                </a>
                <a
                    href="https://astro.build/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                  <SiAstro title="Astro"/>
                </a>

              </small>
            </article>
          </div>

          <p>// I value philosophy and the pursuit of knowledge that highlights how much there is still to learn. That's why I enjoy programming—it connects me with smarter people and helps me grow.</p>

          <a href="https://api.whatsapp.com/send/?phone=527711006533&text&type=phone_number&app_absent=0" target="__blank" className='btn btn-primary'>Let's Talk</a> 
        </div>
      </div>
    </section>
  )
}

export default About
