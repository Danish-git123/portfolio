import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Achievements', href: '#achievements' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-black/70 backdrop-blur-xl border-b border-white/5' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center space-x-1.5 font-bold text-lg md:text-xl tracking-tight">
            <span className="text-white hover:text-white/80 transition-colors">danish.dev</span>
            <span className="text-gradient-pink-purple font-serif italic text-base lowercase">portfolio</span>
          </a>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Contact CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative group p-[1px] rounded-full bg-gradient-to-r from-brandPink to-brandPurple transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 hover:bg-black/85 transition-colors">
              <MessageSquare className="w-4 h-4 text-brandPink group-hover:scale-110 transition-transform" />
              <span>Contact</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-base font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/5">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 p-[1px] rounded-full bg-gradient-to-r from-brandPink to-brandPurple"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-full text-center py-2.5 rounded-full bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brandPink" />
                  <span>Contact</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
