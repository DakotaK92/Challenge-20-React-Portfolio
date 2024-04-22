import React from "react";
import "./Portfolio.css";
import Portfolio1 from "";
import Portfolio2 from "";
import Portfolio3 from "";
import Portfolio4 from "";
import Portfolio5 from "";
import Portfolio6 from "";

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