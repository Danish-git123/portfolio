import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    intent: 'Hiring' // 'Hiring' | 'Chit-chat'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIntentChange = (selectedIntent) => {
    setFormData(prev => ({
      ...prev,
      intent: selectedIntent
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || '8ec86ee6-8a8b-411e-8049-fde5a79027a9';

    const payload = {
      access_key: apiKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `Portfolio Message from ${formData.name} [${formData.intent}]`,
      from_name: "Mohamad Danish Portfolio",
      intent_type: formData.intent
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', intent: 'Hiring' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide alert after 6 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-brandPink/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-brandPurple/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight">
          Get In <span className="font-serif italic text-gradient-pink-purple font-normal">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Let's Connect Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                I'm always open to discussing new opportunities, full-stack projects, design files, or coding problems. 
                Whether you're looking to hire or just want to reach out, drop a message!
              </p>
            </div>

            {/* Direct Details Grid */}
            <div className="space-y-4">
              <div className="gradient-border-card p-5 flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <Mail className="w-5 h-5 text-brandPink" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:danishbagwan88@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                    danishbagwan88@gmail.com
                  </a>
                </div>
              </div>

              <div className="gradient-border-card p-5 flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <Phone className="w-5 h-5 text-brandPurple" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Phone</p>
                  <a href="tel:+918237991286" className="text-sm text-gray-300 hover:text-white transition-colors">
                    +91 8237991286
                  </a>
                </div>
              </div>

              <div className="gradient-border-card p-5 flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl">
                  <MapPin className="w-5 h-5 text-brandIndigo" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-sm text-gray-300 font-light">
                    Kolhapur, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Find me on channels:</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={import.meta.env.VITE_GITHUB_URL || 'https://github.com/Danish-git123'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border-card p-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-all text-xs font-semibold hover:shadow-[0_0_15px_rgba(255,45,138,0.1)]"
                >
                  <Github className="w-4.5 h-4.5 text-brandPink" />
                  <span>GitHub</span>
                </a>
                
                <a
                  href={import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/danish-bagwan-a047362b0/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border-card p-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-all text-xs font-semibold hover:shadow-[0_0_15px_rgba(159,50,255,0.1)]"
                >
                  <Linkedin className="w-4.5 h-4.5 text-brandPurple" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7 gradient-border-card p-8 md:p-10 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Intent Toggle Pills */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  I am reaching out regarding:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleIntentChange('Hiring')}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.intent === 'Hiring'
                        ? 'border-brandPink bg-brandPink/10 text-white shadow-[0_0_15px_rgba(255,45,138,0.15)]'
                        : 'border-white/5 bg-black/50 text-gray-500 hover:border-white/10 hover:text-gray-300'
                    }`}
                  >
                    <span>Interested In Hiring!</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleIntentChange('Chit-chat')}
                    className={`p-3.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                      formData.intent === 'Chit-chat'
                        ? 'border-brandPurple bg-brandPurple/10 text-white shadow-[0_0_15px_rgba(159,50,255,0.15)]'
                        : 'border-white/5 bg-black/50 text-gray-500 hover:border-white/10 hover:text-gray-300'
                    }`}
                  >
                    <span>Some Chit-Chat!</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brandPink"></span>
                  </button>
                </div>
              </div>

              {/* Name Input */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brandPink transition-colors text-sm"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brandPink transition-colors text-sm"
                  placeholder="name@company.com"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/70 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-brandPink transition-colors text-sm resize-none"
                  placeholder="Tell me details about your project or opportunity..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-brandPink to-brandPurple hover:opacity-90 disabled:opacity-55 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-brandPink/15"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-400 animate-fade-in-up text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Message delivered! I will review your email and get back to you shortly.</span>
                </div>
              )}

              {/* Error Notification Alert */}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 animate-fade-in-up text-sm font-semibold">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Submission failed. Please verify your connection or email danishbagwan88@gmail.com.</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
