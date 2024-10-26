import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import myimg from './assets/myimg.png';

const App = () => {
  return (
    <div className="font-Playwrite GB S">
      <Navbar />
      <section id="home" className="py-20 text-center bg-gray-100 h-screen flex justify-center items-center flex-col">
        <div>
          <img src={myimg} alt="My Image" className="w-32 h-32" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-gray-600">
          Hi, I’m Pradhunya Gawande, a Frontend Developer.
        </p>
      </section>
      <section id="about" className="py-20 bg-white text-center h-screen">
        <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
          A short description about yourself.
        </p>
      </section>
      <section id="projects" className="py-20 bg-gray-100 text-center h-screen">
        <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        <p className="mt-4 text-gray-600">
          Showcase your recent work or projects here.
        </p>
      </section>
      <section id="contact" className="py-20 bg-white text-center h-screen">
        <h2 className="text-3xl font-semibold text-gray-800">Contact</h2>
        <p className="mt-4 text-gray-600">
          Provide your contact details or a contact form.
        </p>
      </section>
    </div>
  );
};

export default App;
