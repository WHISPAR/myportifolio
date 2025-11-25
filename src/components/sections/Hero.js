// components/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">John Doe</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">Full Stack Developer & UI/UX Designer</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;