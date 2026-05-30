import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'LeetCode Solved', value: '170+', icon: <BookOpen className="w-5 h-5 text-brandPink" /> },
    { label: 'Major Projects', value: '3', icon: <Layers className="w-5 h-5 text-brandPurple" /> },
    { label: 'Finalist Positions', value: '1', icon: <Award className="w-5 h-5 text-brandIndigo" /> },
    { label: 'Tech Stacks', value: '2+', icon: <CheckCircle className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black py-24 overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brandPurple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
          About <span className="font-serif italic text-gradient-pink-purple font-normal">Me</span>
        </h2>

        {/* Bio Card */}
        <div className="gradient-border-card p-8 md:p-12 mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg md:text-xl leading-relaxed font-light">
              Hello! I'm <span className="font-semibold text-white">Mohamad Danish Irshad Ahamad Bagwan</span>, 
              based in Kolhapur, Maharashtra. I'm an aspiring Full Stack Developer passionate about building 
              scalable applications and solving real-world problems through technology.
            </p>

            <p className="text-lg leading-relaxed font-light">
              My journey in software development is driven by a strong foundation in data structures and algorithms. 
              I've successfully solved <span className="font-semibold text-brandPink">170+ problems on LeetCode</span>, 
              continuously refining my problem-solving skills and technical approach.
            </p>

            <p className="text-lg leading-relaxed font-light">
              I specialize in building robust backend systems with <span className="font-semibold text-brandPurple">Spring Boot and Java</span>, 
              creating responsive user interfaces with <span className="font-semibold text-brandPurple">React.js</span>, 
              and managing databases efficiently. I'm experienced with modern web development practices and love 
              exploring new technologies.
            </p>

            <p className="text-lg leading-relaxed font-light">
              Beyond coding, I'm enthusiastic about learning new technologies, contributing to collaborative projects, 
              and staying updated with industry trends. When I'm not coding, you can find me exploring competitive programming 
              or working on innovative side projects.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="gradient-border-card p-6 text-center flex flex-col items-center justify-center">
              <div className="mb-3 p-2 bg-white/5 rounded-full">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Info Card */}
        <div className="gradient-border-card p-6 md:p-8">
          <h3 className="font-semibold text-white mb-6 text-lg border-b border-white/5 pb-3">Contact Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">
                <Mail className="w-5 h-5 text-brandPink" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Email</p>
                <a href="mailto:danishbagwan88@gmail.com" className="text-sm hover:text-white transition-colors">
                  danishbagwan88@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">
                <Phone className="w-5 h-5 text-brandPurple" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Phone</p>
                <a href="tel:+918237991286" className="text-sm hover:text-white transition-colors">
                  +91 8237991286
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-lg">
                <MapPin className="w-5 h-5 text-brandIndigo" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Location</p>
                <span className="text-sm font-light">Kolhapur, Maharashtra, India</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
