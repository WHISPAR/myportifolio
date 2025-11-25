// src/components/sections/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with forecast and location services',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'API Integration', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveLink} className="text-blue-600 hover:text-blue-800 font-medium">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="text-gray-600 hover:text-gray-800 font-medium">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;