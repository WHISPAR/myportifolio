// src/components/layout/Header.js
import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Your Name</div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;