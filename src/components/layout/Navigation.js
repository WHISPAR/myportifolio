// src/components/layout/Navigation.js
import React from 'react';

const Navigation = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => scrollToSection(item.href)}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;