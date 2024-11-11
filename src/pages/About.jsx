import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Rocket, Brain, Users } from 'lucide-react';

const AboutSection = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  // Item container animation variants
  const itemContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(249, 250, 251, 0.8)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const items = [
    {
      icon: <Code />,
      text: "Frontend Developer & Cybersecurity Enthusiast",
      highlight: "focused on crafting impactful, user-friendly web applications.",
    },
    {
      icon: <Rocket />,
      text: "Currently diving deep into the MERN stack",
      highlight: "(MongoDB, Express.js, React, Node.js) to sharpen my full-stack development skills.",
    },
    {
      icon: <Brain />,
      text: "Passionate about blending creativity with problem-solving",
      highlight: "to deliver efficient and engaging user experiences.",
    },
    {
      icon: <Users />,
      text: "Always eager to learn, grow, and collaborate",
      highlight: "on innovative projects that push boundaries in tech.",
    },
    {
      icon: <Shield />,
      text: "Excited to contribute to cutting-edge solutions",
      highlight: "while continuously improving my expertise in both frontend development and cybersecurity.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.h2 
          variants={titleVariants}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemContainerVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            className="flex items-start space-x-4 p-6 rounded-lg bg-white shadow-lg transform transition-all duration-300"
          >
            <motion.div 
              className="text-blue-500 mt-1"
              variants={iconVariants}
              whileHover="hover"
            >
              {React.cloneElement(item.icon, { className: "w-6 h-6" })}
            </motion.div>
            <motion.div
              variants={textVariants}
              className="flex-1"
            >
              <motion.span 
                className="font-semibold block text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.text}
              </motion.span>
              <motion.span 
                className="text-gray-600 block mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
              >
                {item.highlight}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSection;