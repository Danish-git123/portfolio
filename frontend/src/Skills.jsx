import React, { useState } from 'react';
import { Code2, Server, Layout, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages');

  const skillsData = {
    languages: {
      title: 'Languages',
      icon: <Code2 className="w-5 h-5 text-brandPink" />,
      skills: ['C++', 'Java', 'JavaScript']
    },
    backend: {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-brandPurple" />,
      skills: ['Spring Boot', 'Spring Security', 'Hibernate', 'JPA', 'RESTful APIs', 'Node.js', 'Express.js']
    },
    frontend: {
      title: 'Frontend',
      icon: <Layout className="w-5 h-5 text-brandIndigo" />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive Design']
    },
    database: {
      title: 'Database',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      skills: ['MySQL', 'MongoDB', 'SQL']
    },
    tools: {
      title: 'Tools & Other',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      skills: ['Git', 'Docker', 'Firebase', 'Twilio SMS', 'Chrome Extension', 'Cloudinary', 'RESTful API Design']
    },
  };

  return (
    <section id="skills" className="relative min-h-screen bg-black py-24 overflow-hidden border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brandPink/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
          Technical <span className="font-serif italic text-gradient-pink-purple font-normal">Skills</span>
        </h2>

        {/* Category Pills Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {Object.entries(skillsData).map(([key, data]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative group p-[1px] rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-brandPink to-brandPurple scale-105 shadow-[0_0_20px_rgba(159,50,255,0.25)]' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <div className={`px-5 py-3 rounded-full text-sm font-semibold flex items-center gap-2.5 transition-colors ${
                  isActive ? 'bg-black text-white' : 'bg-darkCard text-gray-400 hover:text-white'
                }`}>
                  {data.icon}
                  <span>{data.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Grid */}
        <div className="gradient-border-card p-8 md:p-12 min-h-[300px]">
          <div className="animate-fade-in-up">
            
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
              <div className="p-2 bg-white/5 rounded-lg">
                {skillsData[activeCategory].icon}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {skillsData[activeCategory].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillsData[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-5 bg-black/50 border border-white/5 rounded-xl hover:border-brandPurple/40 hover:bg-white/[0.02] transition-all duration-300 group hover:shadow-[0_0_15px_rgba(159,50,255,0.1)]"
                >
                  <div className="flex items-center">
                    {/* Glowing Bullet */}
                    <div className="w-2 h-2 bg-brandPink rounded-full mr-4 group-hover:scale-125 transition-transform group-hover:shadow-[0_0_8px_#ff2d8a]"></div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Tech Stack Overview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gradient-border-card p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold text-base mb-2">Full Stack Development</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Seamless integration of frontends and backends using modern API standards, microservices, and databases.
              </p>
            </div>
            <div className="text-xs font-semibold text-brandPink mt-4 uppercase tracking-wider">
              Java • Spring • React.js
            </div>
          </div>

          <div className="gradient-border-card p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold text-base mb-2">Robust Backend Systems</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Creating highly secure, reliable, and performant REST APIs with Hibernate, JPA, Spring Security, and database systems.
              </p>
            </div>
            <div className="text-xs font-semibold text-brandPurple mt-4 uppercase tracking-wider">
              APIs • Databases • Security
            </div>
          </div>

          <div className="gradient-border-card p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold text-base mb-2">Specializations</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Familiarity with cloud integrations, Twilio SMS alerts, Chrome Extensions, Docker, and containerized deployment workflows.
              </p>
            </div>
            <div className="text-xs font-semibold text-brandIndigo mt-4 uppercase tracking-wider">
              Docker • Ext • Integration
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
