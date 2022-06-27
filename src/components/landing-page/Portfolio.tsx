import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Work from "./Work";

const Portfolio = () => {
  return (
    <div className="text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Portfolio;
