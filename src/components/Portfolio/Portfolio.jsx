import React from "react";
import "./Portfolio.css";
import Portfolio1 from "./src/assets/portfolio/Portfolio1";
import Portfolio2 from "./src/assets/portfolio/Portfolio2";
import Portfolio3 from "./src/assets/portfolio/Portfolio3";
import Portfolio4 from "./src/assets/portfolio/Portfolio4";
import Portfolio5 from "./src/assets/portfolio/Portfolio5";
import Portfolio6 from "./src/assets/portfolio/Portfolio6";

const Portfolio = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDescription">These are my projects</span>
            <div className="workImgs">
                <img src={Portfolio1} alt="" className="workImg"></img>
                <img src={Portfolio2} alt="" className="workImg"></img>
                <img src={Portfolio3} alt="" className="workImg"></img>
                <img src={Portfolio4} alt="" className="workImg"></img>
                <img src={Portfolio5} alt="" className="workImg"></img>
                <img src={Portfolio6} alt="" className="workImg"></img>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
};

export default Portfolio;