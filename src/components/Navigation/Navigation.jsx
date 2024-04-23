import React, { useState } from "react";
import "./Navigation.css";
import contactImg from "../../assets/icons/contactIconSm.png";
import logo from '../../assets/icons/whiteLogo.png';
import {Link} from 'react-scroll';
import menu from '../../assets/icons/hamburgerIcon.png';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="Navigation">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }>
                <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navigation;