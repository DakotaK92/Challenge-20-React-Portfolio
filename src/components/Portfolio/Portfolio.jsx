import React from "react";
import "./Portfolio.css";
import Portfolio1 from "../../assets/portfolio/Portfolio1_480.jpg";
import Portfolio2 from "../../assets/portfolio/Portfolio2_480.jpg";
import Portfolio3 from "../../assets/portfolio/Portfolio3_480.jpg";
import Portfolio4 from "../../assets/portfolio/Portfolio4_480.jpg";
import Portfolio5 from "../../assets/portfolio/Portfolio5_480.jpg";
import Portfolio6 from "../../assets/portfolio/Portfolio6_480.jpg";

const data = [
    {
      id: 1,
      image: Portfolio1,
      title: "Weather Forecast",
      github: "https://github.com/DakotaK92/Challenge-6-Weather-Forecast",
      demo: "https://dakotak92.github.io/Challenge-6/",
    },
    {
      id: 2,
      image: Portfolio2,
      title: "Password Generator",
      github: "https://github.com/DakotaK92/Challenge-3-Password-Generator",
      demo: "https://dakotak92.github.io/Challenge-3/",
    },
    {
      id: 3,
      image: Portfolio3,
      title: "Just Another Text Editor",
      github: "https://github.com/DakotaK92/Challenge-19-Progressive-Web-Applications-PWA-JATE",
      demo: "https://challenge-19-progressive-web-el98.onrender.com",
    },
    {
      id: 4,
      image: Portfolio4,
      title: "MVC Tech Blog",
      github: "https://github.com/DakotaK92/Challenge-14-MVC-Tech-Blog",
      demo: "https://dakotak92.github.io/Challenge-14-MVC-Tech-Blog/",
    },
    {
      id: 5,
      image: Portfolio5,
      title: "Lick",
      behanced: "https://www.behance.net/gallery/96006527/Lick",
    },
    {
      id: 6,
      image: Portfolio6,
      title: "Dicey Dyes",
      behanced: "https://www.behance.net/gallery/151069693/Dicey-Dice",
    },
  ];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
            {data.map(({ id, image, title, github, behanced, demo }) => {
                return (
                <article key={id} className="portfolio__item">
                    <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank"> GitHub </a>
                    <a href={behanced} className="btn" target="_blank"> Behanced </a>
                    <a href={demo} className="btn btn-primary" target="_blank"> Live Site </a>
                    </div>
                </article>
                );
            })}
            </div>
        </section>
    );
};

export default Portfolio;