import React from "react";
import './contact.css'

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaDribbble,
} from 'react-icons/fa'




import {FiSend} from 'react-icons/fi'
const Contact = () => {
    return (
        <>
            <section className="contact section">
                <h2 className="section__title">Get In <span>Touch</span></h2>

                <div className="contact__container container grid">
                    <div className="contact__data">
                        <h3 className="contact__title">Don't be Shy !</h3>

                        <p className="contact__description">
                            Feel free to get in touch with me. I am always open to discussing
                            new pprojects, creative ides or opportunities to be part of your
                            visions.
                        </p>

                        <div className="contact__info">
                            <div className="info__item">
                                <FaEnvelopeOpen className="info__icon" />

                                <div>
                                    <span className="info__title">Mail Me</span>
                                    <h4 className="info__desc">bekzod.maxmudov01302@gmail.com</h4>
                                </div>
                            </div>

                            <div className="info__item">
                                <FaPhoneSquareAlt className="info__icon" />

                                <div>
                                    <span className="info__title">Call  Me</span>
                                    <h4 className="info__desc">+998901987308</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contact__socials">
                            <a href="https://facebook.com" className="contact__social-link">
                                <FaFacebookF/>
                            </a>

                            <a href="https://twitter.com" className="contact__social-link">
                                <FaTwitter/>
                            </a>

                            <a href="https://youtube.com" className="contact__social-link">
                                <FaYoutube/>
                            </a>

                            <a href="https://dribbble.com" className="contact__social-link">
                                <FaDribbble/>
                            </a>
                        </div>
                    </div>
                    <form className="contact__form" id="frm"  >
                        <div className="form__input-group">
                            <div className="form__input-div">
                                <input type="text" placeholder="Your Name" className="form__control" name="fname" required/>
                            </div>

                            <div className="form__input-div">
                                <input type="email" placeholder="Your Email" className="form__control" name="email" required/>
                            </div>

                            <div className="form__input-div">
                                <input type="text" placeholder="Your Subject" className="form__control" name="subject" required/>
                            </div>
                        </div>

                        <div className="form__input-div">
                            <textarea placeholder="Your Message" className="form__control textarea" name="msg" required></textarea>
                        </div>

                        <button className="button">Send Message <span className="button__icon"><FiSend/></span></button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact