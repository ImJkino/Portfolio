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
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
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
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Create the user interface for an app, website, or other interactive media.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEV */}
            </div>
        </section>
    )
}

export default Services