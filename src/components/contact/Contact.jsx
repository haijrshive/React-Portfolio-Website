import React, {useRef} from "react";
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventdefault();
  
  emailjs.sendForm('service_l2nl00p', 'template_cr2s4c4', form.current, 'YOUR_USER_ID')

  e.target.reset()
};

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>haishivejr@gmail.com</h5>
            <a href="mailto:haishivejr@gmail.com" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;