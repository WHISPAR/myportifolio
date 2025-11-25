// src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Your Name</h3>
          <p className="text-gray-400 mb-6">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            {/* Social Links */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;