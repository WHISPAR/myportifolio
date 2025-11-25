// src/components/sections/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="text-center md:text-left">
            <div className="w-48 h-48 mx-auto md:mx-0 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Curious & Passionate Developer</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with a passion for creating innovative web solutions. 
              With expertise in modern technologies like React, Node.js, and cloud platforms, I bring 
              ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          {/* Details Section */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-semibold mb-6 text-gray-800">Personal Info</h4>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-medium">Name:</span>
                <span className="text-gray-800">Your Name</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-medium">Email:</span>
                <span className="text-gray-800">your.email@example.com</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-medium">Location:</span>
                <span className="text-gray-800">Your City, Country</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-32 text-gray-500 font-medium">Experience:</span>
                <span className="text-gray-800">3+ Years</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h5 className="text-lg font-semibold mb-4 text-gray-800">Quick Stats</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">30+</div>
                  <div className="text-sm text-gray-600">Clients</div>
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