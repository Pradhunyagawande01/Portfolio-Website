import React from "react";
import Bg from "../Components/Bg";

const About = () => {
  return (
    <div className="text-black h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Component */}
      <Bg />

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <section className="flex flex-col justify-center items-center md:px-24 w-full">
          <div className="text-xl flex items-center justify-center flex-col text-center w-full md:w-2/3">
            <h1 className="text-6xl pb-10">About</h1>
            <p className="px-4 md:px-0">
              <span className="font-bold">Hi, I'm Pradhunya Gawande</span>, a
              Frontend Developer & Cybersecurity Enthusiast passionate about
              building user-friendly and secure web applications. 🚀 I'm
              currently mastering the MERN stack to enhance my skills in
              full-stack development, combining creativity with problem-solving
              to deliver impactful solutions. 🔐 I aim to merge secure coding
              practices with intuitive design to create applications that are
              both engaging and resilient. Let’s connect to collaborate and
              create meaningful digital experiences!
            </p>
            <img
              src="https://user-images.githubusercontent.com/74038190/212744287-14f66c13-5458-40dc-9244-8ff533fc8f4a.gif"
              className="text-center w-full md:w-2/3 pt-3.5 pb-10"
              alt="Animated GIF"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;