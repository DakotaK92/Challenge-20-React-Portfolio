import React from "react";
import "./Skills.css";
import Frontend from "./src/assets/icons/fronendIcon";
import Backend from "./src/assets/icons/backendIcon";
import GraphicDesign from "./src/assets/icons/creativeCloudIcon";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I can do</span>
            <span className="skillDescription">I am a skilled Web Designer and Grapic Designer</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Frontend} alt="Frontend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Backend} alt="Backend" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={GraphicDesign} alt="GraphicDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Graphic Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;