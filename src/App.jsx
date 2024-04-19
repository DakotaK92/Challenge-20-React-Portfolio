import React from "react";
import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Home
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      <Footer/>
    </div>
  );
};

export default App;