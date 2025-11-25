// src/components/sections/Hero.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = '/Wilson_Wasili_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Wilson_Wasili_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-all duration-500"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float-fast"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="fade-in-up">
          {/* Profile Image/Icon */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1.5 shadow-2xl shadow-blue-500/25 dark:shadow-blue-500/10">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 flex items-center justify-center backdrop-blur-sm">
                <div className="text-5xl">🚀</div>
              </div>
            </div>
            
            {/* Animated Ring */}
            <div className="absolute inset-0 mx-auto w-44 h-44 rounded-3xl border-2 border-blue-500/30 animate-ping-slow"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent leading-tight">
            WILSON
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WASILI
            </span>
          </h1>

          {/* Title & Description */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="font-semibold text-blue-600 dark:text-blue-400">digital experiences</span> with precision and passion. 
              Transforming ideas into <span className="font-semibold text-purple-600 dark:text-purple-400">elegant solutions</span> through clean code 
              and intuitive design.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">3+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">30+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Satisfaction</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button
              onClick={scrollToProjects}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25 dark:shadow-blue-500/15 hover:shadow-blue-500/40 dark:hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={downloadCV}
              className="group relative px-10 py-5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Download CV
                <svg className="w-5 h-5 ml-3 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gray-50 dark:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">TECH STACK</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-80">
              {['React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'Tailwind', 'MongoDB', 'AWS'].map((tech) => (
                <div key={tech} className="flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div 
              className="flex flex-col items-center space-y-2 cursor-pointer group"
              onClick={scrollToProjects}
            >
              <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                Explore More
              </span>
              <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;