import React from "react";
import Tech from "../Components/Tech";

const About = () => {
  return (
    <div className=" text-black h-screen">
      <section className="relative flex flex-col justify-center items-end md:px-24 ">
        <div className="text-xl flex items-center justify-center flex-col text-center w-2/3 relative">
          <h1 className="text-6xl pb-10">About</h1>
          <p className="">
            <span className="font-bold">Hi, I'm Pradhunya Gawande</span>, a Frontend Developer & Cybersecurity
            Enthusiast passionate about building user-friendly and secure web
            applications. 🚀 I'm currently mastering the MERN stack to enhance
            my skills in full-stack development, combining creativity with
            problem-solving to deliver impactful solutions. 🔐 I aim to merge
            secure coding practices with intuitive design to create applications
            that are both engaging and resilient. Let’s connect to collaborate
            and create meaningful digital experiences!
          </p>
          <img src="https://user-images.githubusercontent.com/74038190/212744287-14f66c13-5458-40dc-9244-8ff533fc8f4a.gif" className="text-center w-full pt-3.5"/>
           <img src='https://user-images.githubusercontent.com/74038190/214644145-264f4759-7633-441e-9d67-d8dda9d50d26.gif' className="right-36 ralative justify-center items-center text-center pt-3.5"/>
        </div>
      </section>
      <Tech />
    </div>
  );
};

export default About;
