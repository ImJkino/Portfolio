import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <a href="/#" className='footer__logo'>ImJkino</a>
            <ul className='permalinks'>
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/joseph-aquino-596862199/"><BsLinkedin /></a>
                <a href="https://github.com/ImJkino"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; ImJkino. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;