import React from "react";
import "./Contact.css";
import Github from "../../assets/icons/githubWhiteIcon.png";
import LinkedIn from "../../assets/icons/linkedInIcon.png";

const Contact = () => {
    return(
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDescription">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"/>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Github} alt="Github" className="link"/>
                        <img src={LinkedIn} alt="LinkedIn" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;