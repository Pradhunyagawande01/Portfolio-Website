import React from 'react';
import { motion } from 'framer-motion';

const techSkills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🌬️' },
      { name: 'HTML/CSS', icon: '🌐' }
    ]
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' }
    ]
  },
  {
    category: 'Programming Languages',
    technologies: [
      { name: 'JavaScript', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'TypeScript', icon: '📘' }
    ]
  },
  {
    category: 'Tools & DevOps',
    technologies: [
      { name: 'Git', icon: '🔧' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Vercel', icon: '🚀' }
    ]
  }
];

const Tech = () => {
  return (
    <div className="min-h-screen p-8">
      <h2 className="text-4xl font-bold text-center mb-12 ">My Tech Arsenal</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techSkills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              type: 'spring', 
              stiffness: 100 
            }}
            className="rounded-xl shadow-lg p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-4 ">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.technologies.map(tech => (
                <div 
                  key={tech.name} 
                  className="flex items-center space-x-3  p-2 rounded-lg"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;