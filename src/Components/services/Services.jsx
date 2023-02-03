import React from 'react';
import "./service.css"
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="constainer services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gather and evaluate user requirements in collaboration with product managers and engineers</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Design graphic user interface elements, like menus, tabs and widgets</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Build page navigation buttons and search fields</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Develop UI mockups and prototypes that clearly illustrate how sites function and look</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Be responsible for maintaining, expanding, and scaling our site</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Integrate data from various back-end services and databases</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Gather and refine specifications and requirements based on technical needs</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create website layout/user interface by using standard HTML/CSS practices</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Stay plugged into emerging technologies/industry trends and apply them into operations and activities</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEV */}
            </div>
        </section>
    )
}

export default Services