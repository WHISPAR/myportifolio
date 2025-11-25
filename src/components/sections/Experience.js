// src/components/sections/Experience.js
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      description: 'Lead frontend development for multiple client projects using React and TypeScript.',
      achievements: ['Improved performance by 40%', 'Mentored 3 junior developers']
    },
    {
      id: 2,
      company: 'Startup Inc',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications using MERN stack.',
      achievements: ['Built 10+ features', 'Reduced load time by 60%']
    },
    {
      id: 3,
      company: 'Digital Agency',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Started my career building responsive websites and web applications.',
      achievements: ['Completed 20+ projects', 'Learned modern development practices']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Work Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative mb-12">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
              )}
              
              <div className="flex">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.position}</h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                      <span className="text-blue-600 font-semibold">{exp.company}</span>
                      <span className="text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;