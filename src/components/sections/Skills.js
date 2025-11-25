// src/components/sections/Skills.js
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'Tailwind CSS', level: 88, category: 'Frontend' },
    { name: 'MongoDB', level: 70, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'AWS', level: 65, category: 'DevOps' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Skills & Technologies</h2>
        
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;