import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';
//import sweetalert and have it pop up after success of message sent

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ft1v5so', 'template_9hcm3bm', form.current, 'l65xTf3zIjA2K0bk8')
            .then(() => {
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <a href="mailto:joseph.aquino.engineer@gmail.com" target="_blank" rel='noopener noreferrer'>Send A Message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/joseph-aquino-596862199/" target="_blank" rel='noopener noreferrer'>Connect</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact