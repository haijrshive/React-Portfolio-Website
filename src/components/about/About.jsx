import React from 'react';
import './about.css';
// import ME from "../../assets/me-about.jpg";
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
            {/* <img src={ME} alt='About Image' /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbMilitaryAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Immersed Cyber Security</small>
            </article>

            <article className='about__card'>
              <VscFolderOpened className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum pariatur eos facilis ut maxime in odit aperiam error, aliquid quibusdam, ea voluptatum est porro vel! Excepturi soluta iure reprehenderit ratione!
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;