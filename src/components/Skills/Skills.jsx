import React from "react";
import "./Skills.css";
import UIDesign from "";
import Webdesign from "";
import AppDesign from "";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I can do</span>
            <span className="skillDescription">I am a skilled Web Designer and Grapic Designer</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Webdesign} alt="Webdesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;