import React from "react";
import './home.css'
import Image from '../../assets/Skrinshot 2023-10-07 191426.png'
import { Link } from "react-router-dom";
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <section className="home section grid">
                <img src={Image} alt="" className="home__img" />

                <div className="home__content">
                    <div className="home__data">
                        <h1 className="home__title"><span>I'm  Bekzod </span> Web Developer</h1>

                        <p>
                            I am a web developer & front-end developer focused on crafting clean & user-freindly experiences, 
                            I am passionate about building excellent software that improves the lives of those around me.
                        </p>
                        <Link to='/about' className="button">More About Me{''} <span className="button__icon"><FaArrowRight/></span></Link>
                    </div>
                </div>

                <div className="color__block"></div>
            </section>
        </>
    )
}


export default Home