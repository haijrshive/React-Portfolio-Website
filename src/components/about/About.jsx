import React from 'react';
import './about.css';
// import ME from "../../assets/me-about.jpeg";
import {TbMilitaryAward, TbUsers} from "react-icons/tb";
import {VscFolderOpened} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt='Me' /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbMilitaryAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Coding</small>
            </article>

            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Languages</h5>
              <small>React, Javascript, HTML5, CSS3</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Snowboarding, Jiujitsu, Surfing</small>
            </article>
          </div>

          <p>
            Hello world! My name is Hai and welcome to my portolio site! Throughout my professional career, I have earned the title of United States Marine, college graduate, and Las Vegas Nightlife Bartender. However, in 2020 the world changed and so did I. It was during quarantine when I decided to finally pursue my dream of learning how to code. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;