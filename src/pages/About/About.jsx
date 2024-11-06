import React from "react";
import './about.css'
import Info from "../../Components/info";
import Stats from "../../Components/stats";
import {FaDownload} from 'react-icons/fa'
import Skills from "../../Components/Skills";
import {resume} from '../../data'
import ResumeItem from "../../Components/ResumeItem";
import Img from '../../assets/Skrinshot 2023-10-07 191426.png'
const About = () => {
    return (

        <>
            <main className="section container">
                <section className="about">
                    <h2 className="section__title">
                        About <span>Me</span>
                    </h2>

                    <div className="about__container grid">
                        <div className="about__info">
                            <h3 className="section__subtitle">Personal Infos</h3>

                            <ul className="info__list grid">
                                <Info/>
                            </ul>

                            <a href={Img} download  className="button">Download CV  <span className="button__icon"><FaDownload/></span></a>
                        </div>

                        <div className="stats grid">
                            <Stats/>
                        </div>
                    </div>
                </section>

                <div className="separator"></div>

                <section className="skills">
                    <h3 className="section__subtitle subtitle-center">My Skills</h3>

                    <div className="skills__container grid">
                        <Skills/>
                    </div>
                </section>
                {/*  */}

                <div className="separator"></div>

                <section className="resume">
                    <h3 className="section__subtitle subtitle__center">Expreince & Education</h3>
                    
                    <div className="resume__container grid">
                        <div className="resume__data">
                            {resume.map((val) => {
                                if(val.category === 'experience') {
                                    return <ResumeItem key={val.id} {...val}/>
                                }
                            })}
                        </div>

                        <div className="resume__data">
                            {resume.map((val) => {
                                if(val.category === 'education') {
                                    return <ResumeItem key={val.id} {...val}/>
                                }
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About