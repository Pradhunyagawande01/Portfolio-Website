import React, { useState } from "react";
import { motion } from "framer-motion";

const techCategories = {
  frontend: [
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "React", icon: "/react.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "Bootstrap", icon: "/bootstrap.png" },
    { name: "Material-UI", icon: "/mui.png" },
    { name: "Figma", icon: "/figma.png" },
  ],
  backend: [
    { name: "Node.js", icon: "/node.png" },
    { name: "Node.js", icon: "/mongo.png" },
    { name: "Python", icon: "/python.png" },
    { name: "PL/SQL", icon: "/sql.png" },
    { name: "C#", icon: "" },
    { name: "C++", icon: "" },
  ],
  devops: [
    { name: "Git", icon: "/git.png" },
    { name: "GitHub", icon: "/github.png" },
    { name: "Netlify", icon: "/netlify.png" },
    { name: "Render", icon: "/render.png" },
    { name: "Vercel", icon: "/vercel.png" },
  ],
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const renderTechIcons = (category) => {
    return techCategories[category].map((tech, index) => (
      <motion.div
      
        className="flex flex-col items-center justify-center backdrop-blur-md bg-white/55 shadow-xl rounded-xl p-6 transition-all duration-300 ease-in-out"
      >
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="w-16 h-16 md:w-16 md:h-16 mb-4 object-contain"
        />
        <p className="text-sm md:text-md font-semibold text-gray-200 tracking-wide text-center">
          {tech.name}
        </p>
      </motion.div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-5xl font-extrabold bg-clip-text pb-12 text-center">
        Tech Stack
      </h1>

      <div className="flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center w-1/2">
          <div className="flex space-x-4 mb-8">
            {Object.keys(techCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="rounded-3xl p-10">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {renderTechIcons(activeCategory)}
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center gap-3">
          <img src="/tech.png" className="h-[400px] w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
