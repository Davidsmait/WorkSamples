import React from 'react'
import HeaderSocials from './HeaderSocials'
import CV from './CTA'
import './header.css'
import ME4 from '../../assets/me4.jpeg'
import {AiOutlineArrowRight} from 'react-icons/ai'


const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>David San Luis</h1>
          <h5 className='text-light'>Software Developer</h5>
          <CV/>
          <HeaderSocials/>

          <div className='me'>
            <img className={""} src={ME4} alt="me"/>
          </div>

          <a href="#portfolio" className='scroll__down'>Scroll down <AiOutlineArrowRight/></a>

        </div>
        <div className='social-icons'>
          <a href="https://angular.io" target="_blank" rel="noreferrer">
            <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular"/>
          </a>

          <a href="https://www.scala-lang.org" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/scala/scala-original.svg"
                 alt="scala"/>
          </a>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"/>
          </a>
          {/*<a href="https://git-scm.com/" target="_blank" rel="noreferrer">*/}
          {/*  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />*/}
          {/*</a>*/}
          <a href="https://ionicframework.com" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ionic/ionic-original.svg"
                 alt="ionic"/>
          </a>
          <a href="https://capacitorjs.com/" target="_blank" rel="noreferrer">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/capacitor/capacitor-original.svg"
                alt="capacitor"/>
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"/>
          </a>
          <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
            <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"/>
          </a>
        </div>
      </header>
  )
}

export default Header
