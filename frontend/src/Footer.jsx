import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          
          {/* Logo & Tagline column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-1.5 font-bold text-lg md:text-xl tracking-tight">
              <span className="text-white">danish.dev</span>
              <span className="text-gradient-pink-purple font-serif italic text-base lowercase">portfolio</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Aspiring Full Stack Developer specializing in robust Java backends (Spring Boot) and highly interactive React interfaces.
            </p>
          </div>

          {/* Quick Navigation Links column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Navigation</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</a>
            </div>
          </div>

          {/* Connect Links column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider">Social Channels</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="mailto:danishbagwan88@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                Email Inbox
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Licensing, Credits & Copyright */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright Info */}
            <div className="text-gray-500 text-xs text-center md:text-left space-y-1">
              <p>© {currentYear} Mohamad Danish Irshad Ahamad Bagwan. All rights reserved.</p>
              <p className="font-light">
                This site and its content is licensed under{' '}
                <a 
                  href="http://creativecommons.org/licenses/by-nc-nd/4.0/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300 transition-colors"
                >
                  CC BY-NC-ND 4.0
                </a>
              </p>
            </div>

            {/* Built Credits */}
            <div className="text-gray-500 text-xs text-center md:text-right space-y-1">
              <p>Built with React, Vite & Tailwind CSS</p>
              <p className="font-light">
                Proudly hosted on{' '}
                <a 
                  href="https://vercel.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-300 transition-colors font-medium"
                >
                  Vercel
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
