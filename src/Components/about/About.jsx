import React from 'react'
import "./about.css";
import ME from "../../assets/cowboy.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about_pic" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>Immersed</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                    </div>
                    <p>
                        Hello There!
                        I graduated a military program that helps veterans transition into the tech field. Being passionate about
                        learning, I knew the tech industry was the career path for me. I was able to utilize my background in the military to
                        push through several hours of learning the vastness of tech. Though I feel I've only scratched the surface I am
                        confident in my ability to learn quickly and become an asset to any team.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Connect!</a>
                </div>
            </div>
        </section>
    )
}

export default About