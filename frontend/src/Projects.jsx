import React from 'react';
import { Github, ExternalLink, CheckCircle2, MessageSquare, Shield, Cpu, Activity, AlertTriangle } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ClinicManager',
      subtitle: 'Digital Queue & Consultation Management',
      description: 'A robust web platform that digitizes patient queues and appointment scheduling for clinics and hospitals. Streamlines operations and keeps patients updated in real time.',
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'Twilio SMS', 'REST APIs'],
      features: [
        'QR-based patient registration for self-check-in',
        'Priority queue scheduling with emergency holds',
        'Real-time SMS notifications via Twilio Integration',
        'Digital prescription templates and records storage'
      ],
      githubLink: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Danish-git123',
      demoLink: import.meta.env.VITE_CLINIC_MANAGER_DEMO_URL || 'https://creative-semolina-87d972.netlify.app/',
      mockupType: 'clinic'
    },
    {
      id: 2,
      title: 'FactChecker',
      subtitle: 'AI-Powered Rumor & Misinformation Detector',
      description: 'An intelligent Chrome Extension that helps users check facts and detect rumors in real-time. Highlights suspicious claims on web pages and queries AI to generate instant verdicts.',
      technologies: ['Spring Boot', 'Spring AI', 'React.js', 'MongoDB', 'Gnews.io API'],
      features: [
        'Selected text claim verification workflow',
        'Verdicts: True, False, or Unverifiable with sources',
        'Integrated with WhatsApp Web and news feeds',
        'Lightweight, non-intrusive extension popup UI'
      ],
      githubLink: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Danish-git123',
      demoLink: import.meta.env.VITE_FACT_CHECKER_DEMO_URL || 'https://drive.google.com/drive/folders/1Vhcf_nMASMSWnXK8CJbgliYNCcLxYHsG?usp=drive_link',
      mockupType: 'factcheck'
    },
    {
      id: 3,
      title: 'CyberTech',
      subtitle: 'Cyber Attack Awareness & Learning Lab',
      description: 'A community-driven educational platform that raises awareness about cybersecurity. Users can read articles, discuss topics, and engage in interactive attack simulation labs.',
      technologies: ['Node.js', 'Express.js', 'React.js', 'Firebase', 'Cloudinary'],
      features: [
        'Interactive mock labs simulating cyber attacks',
        'Community discussion module with threads and likes',
        'Collaborative system engineered by a 4-member team',
        'Dynamic dashboard visualizing security statistics'
      ],
      githubLink: import.meta.env.VITE_CYBERTECH_GITHUB_URL || 'https://github.com/Samarthk2117/angadi',
      demoLink: null,
      mockupType: 'cyber'
    }
  ];

  // Helper component to render beautiful CSS Mockups matching the project type
  const RenderMockup = ({ type }) => {
    if (type === 'clinic') {
      return (
        <div className="relative w-full h-[220px] md:h-[280px] bg-darkBg rounded-xl border border-white/5 overflow-hidden flex flex-col p-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brandPink"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-brandPurple"></span>
              <span className="text-[10px] text-gray-500 font-mono">clinic-queue-board v1.0</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-semibold flex items-center gap-1">
              <Activity className="w-2.5 h-2.5 animate-pulse" /> Live Status
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-500 block">Current Token</span>
                <span className="text-sm font-bold text-white">Token #104 - Rohit K.</span>
              </div>
              <span className="px-2 py-0.5 bg-brandPurple/20 border border-brandPurple/30 text-brandPurple text-[10px] rounded font-medium">In Progress</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/[0.01] border border-white/5 rounded-lg p-2 flex flex-col">
                <span className="text-[9px] text-gray-500">Wait Position</span>
                <span className="text-sm font-bold text-brandPink">4 Patients</span>
              </div>
              <div className="bg-white/[0.01] border border-white/5 rounded-lg p-2 flex flex-col">
                <span className="text-[9px] text-gray-500">Avg. Consultation</span>
                <span className="text-sm font-bold text-brandIndigo">12 mins</span>
              </div>
            </div>
            {/* Pulsing button mockup */}
            <div className="mt-auto bg-gradient-to-r from-brandPink to-brandPurple p-[1px] rounded-lg">
              <div className="w-full text-center py-2 bg-black rounded-lg text-[10px] font-semibold text-white">
                Emergency Queue Hold: Active
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'factcheck') {
      return (
        <div className="relative w-full h-[220px] md:h-[280px] bg-darkBg rounded-xl border border-white/5 overflow-hidden flex p-3 gap-3">
          {/* Web page overlay mockup */}
          <div className="flex-1 bg-white/[0.02] rounded-lg p-2 text-[9px] text-gray-500 flex flex-col gap-1.5 border border-white/5">
            <div className="w-12 h-2.5 bg-white/10 rounded"></div>
            <div className="space-y-1 mt-1">
              <div className="w-full h-1.5 bg-white/5 rounded"></div>
              <div className="w-full h-1.5 bg-white/5 rounded"></div>
              <div className="w-4/5 h-1.5 bg-brandPink/35 rounded border border-brandPink/40 relative">
                <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandPink opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brandPink"></span>
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded"></div>
            </div>
          </div>
          {/* Extension Panel mockup */}
          <div className="w-36 bg-darkCard border border-white/10 rounded-lg p-2.5 flex flex-col gap-2 shadow-xl">
            <span className="text-[9px] font-bold text-white border-b border-white/5 pb-1 block flex items-center gap-1">
              <Cpu className="w-2.5 h-2.5 text-brandPurple" /> FactChecker AI
            </span>
            <div className="bg-red-500/10 border border-red-500/20 p-1.5 rounded flex flex-col gap-0.5">
              <span className="text-[8px] text-red-400 font-bold flex items-center gap-1">
                <AlertTriangle className="w-2 h-2" /> VERDICT: FALSE
              </span>
              <p className="text-[7px] text-gray-400">Claim analyzed by AI. Gnews sources confirm 0 matches.</p>
            </div>
            <div className="mt-auto flex justify-between text-[7px] text-gray-500 font-mono">
              <span>Confidence: 94%</span>
              <span>v1.2.0</span>
            </div>
          </div>
        </div>
      );
    }

    if (type === 'cyber') {
      return (
        <div className="relative w-full h-[220px] md:h-[280px] bg-darkBg rounded-xl border border-white/5 overflow-hidden flex flex-col p-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
            <span className="text-[10px] text-white font-bold flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brandPink" /> CyberTech Labs
            </span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-white/[0.02] border border-white/5 rounded-lg p-2 text-[9px] text-gray-400 flex flex-col gap-1.5">
              <span className="font-semibold text-white">Lab #2: MITM Attack Simulation</span>
              <p className="text-[8px] text-gray-500 leading-tight">Interact with routing elements to intercept simulated client-server TCP handshakes.</p>
              <div className="mt-auto flex gap-1.5">
                <span className="px-1.5 py-0.5 bg-brandPink/20 text-brandPink rounded text-[8px] font-medium">Difficulty: Mid</span>
                <span className="px-1.5 py-0.5 bg-brandPurple/20 text-brandPurple rounded text-[8px] font-medium">Labs</span>
              </div>
            </div>
            <div className="bg-white/[0.01] border border-white/5 rounded-lg p-2 flex flex-col items-center justify-center gap-1.5">
              <span className="text-[8px] text-gray-500 text-center uppercase tracking-wider block">Members Joined</span>
              <span className="text-lg font-bold text-white">450+</span>
              <span className="text-[8px] text-brandIndigo font-semibold">Active Hub</span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="relative min-h-screen bg-black py-24 overflow-hidden border-b border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-[50%] right-[10%] w-[450px] h-[450px] rounded-full bg-brandPurple/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brandPink/5 blur-[110px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
          Featured <span className="font-serif italic text-gradient-pink-purple font-normal">Projects</span>
        </h2>

        {/* Project Layout List */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="gradient-border-card p-6 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:shadow-[0_15px_30px_rgba(255,45,138,0.08)] transition-all duration-300"
              >
                
                {/* Visual Showcase (CSS Mockup Panel) */}
                <div className={`w-full lg:w-2/5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <RenderMockup type={project.mockupType} />
                </div>

                {/* Project Details Copy */}
                <div className={`w-full lg:w-3/5 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Featured Tag */}
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-brandPink/20 to-brandPurple/20 border border-brandPink/35 rounded-full mb-4">
                      <span className="text-[10px] font-bold text-brandPink uppercase tracking-wider">Featured Application</span>
                    </div>

                    {/* Titles */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">{project.title}</h3>
                    <p className="text-base text-brandPink font-medium mb-4">{project.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Key Solutions Implemented:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start text-xs text-gray-400">
                            <CheckCircle2 className="w-4 h-4 text-brandPurple mr-2.5 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Chips */}
                    <div className="border-t border-white/5 pt-5 mb-6">
                      <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Technologies Built With:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-gray-300 hover:border-brandPink/50 hover:bg-white/[0.02] transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links buttons */}
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-2 group active:scale-95"
                    >
                      <Github className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors" />
                      <span>Source Code</span>
                    </a>
                    
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-gradient-to-r from-brandPink to-brandPurple hover:opacity-90 text-white text-xs font-semibold rounded-lg transition-all flex items-center gap-2 active:scale-95 shadow-md shadow-brandPink/20"
                      >
                        <ExternalLink className="w-4.5 h-4.5" />
                        <span>Live Showcase</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
