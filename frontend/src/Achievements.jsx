import React from 'react';
import { Trophy, Award, BookOpen, ExternalLink, Activity, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Finalist – Tech-Ideathon 2026',
      organization: 'VIT Mauritius',
      date: '2026',
      description: 'Selected as a finalist for developing the CyberTech Cyber Awareness Platform focused on cybersecurity awareness and interactive learning. This recognition highlights innovation in educational technology and cybersecurity.',
      category: 'Competition',
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      link: import.meta.env.VITE_CERTIFICATE_DRIVE_URL || 'https://drive.google.com/drive/folders/1Vhcf_nMASMSWnXK8CJbgliYNCcLxYHsG?usp=drive_link'
    },
    {
      id: 2,
      title: 'Intro to MCP by Anthropic',
      organization: 'Anthropic Certification',
      date: 'Recent',
      description: 'Completed the comprehensive introduction course to Model Context Protocol (MCP) by Anthropic, demonstrating knowledge of modern AI integration patterns and practices.',
      category: 'Certification',
      icon: <Award className="w-6 h-6 text-brandPurple" />,
      link: import.meta.env.VITE_CERTIFICATE_DRIVE_URL || 'https://drive.google.com/drive/folders/1Vhcf_nMASMSWnXK8CJbgliYNCcLxYHsG?usp=drive_link'
    },
    {
      id: 3,
      title: '170+ LeetCode Solved',
      organization: 'LeetCode Platform',
      date: 'Ongoing',
      description: 'Developed a strong capability in algorithms and data structures, completing over 170+ complex programming tasks. Regularly refines optimization and logic skills.',
      category: 'Achievement',
      icon: <BookOpen className="w-6 h-6 text-brandPink" />
    }
  ];

  const skills = [
    { skill: 'Problem Solving', level: '90%' },
    { skill: 'Backend Development', level: '85%' },
    { skill: 'API Development & Design', level: '85%' },
    { skill: 'Frontend Development', level: '80%' },
    { skill: 'Database Management', level: '80%' },
    { skill: 'Full Stack Integration', level: '80%' }
  ];

  return (
    <section id="achievements" className="relative min-h-screen bg-black py-24 overflow-hidden border-b border-white/5">
      {/* Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brandPink/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brandPurple/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
          Achievements & <span className="font-serif italic text-gradient-pink-purple font-normal">Awards</span>
        </h2>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="gradient-border-card p-8 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(159,50,255,0.06)] hover:scale-[1.02] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
                  <div className="p-2 bg-white/5 rounded-xl">{achievement.icon}</div>
                  <span className="px-2.5 py-1 bg-brandPurple/10 border border-brandPurple/25 text-brandPurple text-[10px] font-bold uppercase tracking-wider rounded-full">
                    {achievement.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{achievement.title}</h3>
                <p className="text-brandPink text-xs font-semibold mb-3">{achievement.organization}</p>
                <p className="text-gray-500 text-xs mb-4 font-mono">{achievement.date}</p>

                <p className="text-gray-300 text-sm leading-relaxed font-light mb-6">{achievement.description}</p>
              </div>

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Proficiency Levels Slider Block */}
        <div className="gradient-border-card p-8 md:p-12 mb-16">
          <div className="flex items-center gap-2.5 mb-8 pb-4 border-b border-white/5">
            <Target className="w-5 h-5 text-brandPink" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Core Competencies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-brandPink font-bold font-mono">{item.level}</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                  <div
                    className="bg-gradient-to-r from-brandPink to-brandPurple h-full rounded-full transition-all duration-1000"
                    style={{ width: item.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistical Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="gradient-border-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-gradient-pink-purple mb-1 font-mono">170+</div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">LeetCode Solved</p>
          </div>

          <div className="gradient-border-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-gradient-purple-blue mb-1 font-mono">3</div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Major Projects</p>
          </div>

          <div className="gradient-border-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-gradient-pink-purple mb-1 font-mono">2</div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Certifications</p>
          </div>

          <div className="gradient-border-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-gradient-purple-blue mb-1 font-mono">1</div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Ideathon Finalist</p>
          </div>
        </div>

      </div>
    </section>
  );
}
