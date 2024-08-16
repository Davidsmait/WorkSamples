import React from 'react'
import './experience.css'
import { HiBadgeCheck } from 'react-icons/hi'

const Experience = () => {
    return (
        <section id='experience' className='experience__section'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Scala</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Java</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>PostgreSQL</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Docker</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Play Framework</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Next.js</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Node.js</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF BACKEND */}
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Angular</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Tailwind CSS</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Vite</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__mobile">
                    <h3>Mobile Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Ionic</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Capacitor</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>App Store Connect</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Google Play Console</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Xcode</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Android Studio</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__tools">
                    <h3>Tools and Technologies</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Git</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>IntelliJ IDEA</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>DBeaver</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Postman</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Scrum</h4>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Firebase</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4>Google Cloud Platform</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon'/>
                            <div>
                                <h4> Apple Developer</h4>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__architecture">
                    <h3>Software Architecture</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon' />
                            <div>
                                <h4>Layered Architecture</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon' />
                            <div>
                                <h4>Clean Architecture</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon' />
                            <div>
                                <h4>MVC</h4>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <HiBadgeCheck className='experience__details-icon' />
                            <div>
                                <h4>OOP</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF SOFTWARE ARCHITECTURE */}
            </div>
        </section>
    )
}

export default Experience
