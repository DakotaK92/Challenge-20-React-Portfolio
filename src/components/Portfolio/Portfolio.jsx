import React from "react";
import "./Portfolio.css";
import Portfolio1 from "../../assets/portfolio/Portfolio1.png";
import Portfolio2 from "../../assets/portfolio/Portfolio2.png";
import Portfolio3 from "../../assets/portfolio/Portfolio3.jpg";
import Portfolio4 from "../../assets/portfolio/Portfolio4.jpg";
import Portfolio5 from "../../assets/portfolio/Portfolio5.jpg";
import Portfolio6 from "../../assets/portfolio/Portfolio6.jpg";

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