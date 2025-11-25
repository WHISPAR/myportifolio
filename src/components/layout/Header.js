// src/components/layout/Header.js
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Your Name
          </div>
          <Navigation />
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;