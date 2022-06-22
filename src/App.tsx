import React from "react";
import "./App.css";
import About from "./components/landing-page/About";
import Contact from "./components/landing-page/Contact";
import Navbar from "./components/landing-page/Navbar";
import Skills from "./components/landing-page/Skills";
import Work from "./components/landing-page/Work";
import Home from "./components/landing-page/Home";
import TodoApp from "./components/todo/TodoApp";
import Calculator from "./components/calculator/Calculator";
import Countries from "./components/countries/Countries";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <TodoApp />
      <Calculator />
      <Countries />
    </div>
  );
};

export default App;
