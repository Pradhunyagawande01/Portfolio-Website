import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import "./App.css";



const App = () => {
  return (
    <Router>
    
    <main>
      <section id="home" className="">
        <Landing />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="sponsors" className="">
        <Projects />
      </section>
      <section id="prizes" className="">
        <Contact />
      </section>
    </main>
  </Router>
  );
};

export default App;
