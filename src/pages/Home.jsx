import React from 'react';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Porfolio from './Portfolio';

export default function Home({ currentPage, setCurrentPage }) {
    if (currentPage === "About") {
        return<About />;
    }
    if (currentPage === "Contact") {
        return <Contact />;
    }
    if (currentPage === "Resume") {
        return <Resume />;
    }
    return <Porfolio />;
}