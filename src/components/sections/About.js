// src/components/sections/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/400/400" 
                alt="Profile" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Curious & Passionate Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating 
                innovative web solutions. With expertise in modern technologies 
                like React, Node.js, and cloud platforms, I bring ideas to life 
                through clean, efficient code.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Name:</h4>
                  <p className="text-gray-600">Your Name</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location:</h4>
                  <p className="text-gray-600">Your City, Country</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Availability:</h4>
                  <p className="text-gray-600">Open for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;