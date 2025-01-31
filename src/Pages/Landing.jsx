import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "../Components/TypingEffect";
import Bg from "../Components/Bg";

const Landing = () => {
  return (
    <div className="relative h-screen text-black">
      {/* Subtle Background Shapes */}
     <Bg />

      <section className="relative z-0 flex flex-col md:flex-row items-center justify-center md:px-24 top-0" >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
          className="w-full md:text-center space-y-4"
        >
          <h1 className="text-6xl font-extrabold mb-4">Hi, I'm Pradhunya Gawande</h1>
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight leading-tight bg-clip-text ">
          Welcome to my digital space!
          </h1>
          <TypingEffect />
          {/* <h2 className="text-lg md:text-2xl ">
           
          </h2> */}
          <h2 className="text-lg md:text-2xl ">Here’s where I showcase my passion
            for crafting user-friendly, modern web experiences and share my
            journey as a developer.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          className="w-1/2 flex justify-center mb-8 "
        >
          <img
            src="/Prada001.png"
            alt="Portfolio Product"
            className="h-[350px] md:h-[550px] object-contain transform transition-all duration-500 rounded-xl"
          />
        </motion.div>
      </section>
        <img src="/pg.png" className="h-[600px] absolute z-10 perspective-origin-bottom left-10"/>
      
    </div>
  );
};

export default Landing;
