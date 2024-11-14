import React from "react";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import './App.css';
import myimg from './assets/myimg.png';
import About from "./pages/About";

const App = () => {
  return (
    <div className="font-Playwrite GB S">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="py-20 text-center bg-[#ECE7E2] h-screen flex justify-center items-center flex-col">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={myimg} alt="My Image" className="w-32 h-32 rounded-full transition-transform duration-300 hover:scale-110" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-gray-800 mt-4 typing-animation"
        >
          Welcome to website
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-gray-600"
        >
          Hi, I’m Pradhunya Gawande, a Frontend Developer.
        </motion.p>
      </section>

      {/* About Section */}
      <section id="about" className="pb-20 bg-[#ECE7E2] text-center h-screen">
       <About/>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#ECE7E2] text-center h-screen">
        <motion.h2 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Projects
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-gray-600"
        >
          Showcase your recent work/projects here.
        </motion.p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#ECE7E2] text-center h-screen">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-gray-800"
        >
          Contact
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-gray-600"
        >
          Reach out to me through these platforms:
        </motion.p>

        {/* Contact Icons */}
        {/* <div className="flex justify-center mt-6 space-x-6 text-2xl text-gray-600">
          <motion.a href="https://github.com" whileHover={{ scale: 1.2, rotate: 15 }}><FaGithub /></motion.a>
          <motion.a href="https://linkedin.com" whileHover={{ scale: 1.2, rotate: 15 }}><FaLinkedin /></motion.a>
          <motion.a href="mailto:example@example.com" whileHover={{ scale: 1.2, rotate: 15 }}><FaEnvelope /></motion.a>
        </div> */}
      </section>
    </div>
  );
};

export default App;
