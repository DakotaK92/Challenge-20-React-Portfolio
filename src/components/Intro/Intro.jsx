import React from "react";
import "./Intro.css";
import bg from '../../assets/icons/introPicFade240.png';

const Intro = () => {
    return(
        <section id="Intro">
            <div className="introContainer">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Dakota King</span>, <br />Full Stack Developer and Graphic Designer</span>
                <p className="introPara">I create websites and make them look good!</p>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    );
}

export default Intro;
    