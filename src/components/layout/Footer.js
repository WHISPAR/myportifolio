// src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Your Name
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 mb-8 text-lg max-w-md mx-auto">
            Building the future one line of code at a time
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                {platform.slice(0, 2)}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Crafted with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;