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
              <small>Snowboarding, Jiujitsu, Surfing, Hunter x Hunter</small>
            </article>
          </div>

          <p>
            Hello world! My name is Hai and welcome to my portolio site! Throughout my professional career, I have traversed many fields earning the titles of United States Marine, kinesiologist and Model Bartender in the Las Vegas Nightlife. My journey into coding and software development began in the year 2020 during quarantine as I taught myself HTML, CSS and Javascript through online tutorials. In 2022, I received formal on the job training from a coding bootcamp and graduated as a front end developer specializing in React. Professionally, I consider my ability to be a team player as one of my greatest strengths. What I love most about coding is the combination of problem solving and learning to be fluent in computer speak. Outside of the tech world,  I am an avid snowboarder, a jiujitsu black belt and frenchie papa.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About;