import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-black flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Grid and Glowing Orbs */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>
      
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-brandPink/10 blur-[110px] animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-brandPurple/10 blur-[130px] animate-pulse-slow -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Italicized hello world */}
            <h2 className="font-serif italic text-3xl md:text-4xl text-brandPink mb-6 tracking-wide select-none">
              hello world
            </h2>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8 max-w-4xl">
              I build & deploy <span className="text-white hover:text-brandPink/95 transition-colors duration-300">scalable systems</span> for users, that solves your <span className="font-serif italic font-normal text-gradient-pink-purple">business tasks</span>
            </h1>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-brandPink to-brandPurple text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(255,45,138,0.35)] text-sm md:text-base group"
              >
                <span>See Projects</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </span>
              </a>
              
              <a
                href="/final_danish_resume.pdf"
                download="Mohamad_Danish_Resume.pdf"
                className="relative group p-[1px] rounded-full bg-gradient-to-r from-brandPink to-brandPurple transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <div className="px-6 py-3.5 rounded-full bg-black text-white text-sm md:text-base font-semibold flex items-center gap-2 hover:bg-black/90 transition-colors">
                  <FileText className="w-4.5 h-4.5 text-brandPink" />
                  <span>Resume</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Mini Bio */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-6 border-l border-white/10 py-4 lg:py-8 mt-6 lg:mt-0">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Hello, I'm <span className="font-semibold text-white">Danish</span>, a Full Stack Developer & Designer with a passion for building scalable backends (Spring Boot) and interactive frontend systems.
            </p>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed border-t border-white/5 pt-4">
              Currently engineering web projects using Java, React.js, and cloud ecosystems. Solved 170+ LeetCode algorithm problems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
