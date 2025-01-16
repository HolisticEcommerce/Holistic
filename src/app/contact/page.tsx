'use client';

import { useState, useEffect } from 'react';

const contactInfo = [
  {
    title: 'Email Us',
    details: 'info@example.com',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: 'Visit Us',
    details: '123 Business Street, Tech City, TC 12345',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 10}s`
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#040D19]">
      {/* Unique Background Pattern */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#1e40af,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_40%,#7e22ce,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_60%,#059669,transparent)]"></div>
        
        {/* Animated Circuit Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-[1px] w-1/3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent top-[20%] left-0 animate-[moveRight_8s_linear_infinite]"></div>
          <div className="absolute h-[1px] w-1/4 bg-gradient-to-r from-transparent via-purple-500 to-transparent top-[45%] right-0 animate-[moveLeft_12s_linear_infinite]"></div>
          <div className="absolute w-[1px] h-1/3 bg-gradient-to-b from-transparent via-blue-500 to-transparent top-[10%] left-[30%] animate-[moveDown_10s_linear_infinite]"></div>
          <div className="absolute w-[1px] h-1/4 bg-gradient-to-b from-transparent via-emerald-500 to-transparent bottom-0 right-[20%] animate-[moveUp_15s_linear_infinite]"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {isClient && particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full bg-emerald-500/30 animate-float-particle`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section with Unique Layout */}
        <div className="relative mb-24">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
          
          {/* Hexagonal Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-lg opacity-50"></div>
              <div className="relative bg-[#040D19] px-6 py-2 rounded-lg border border-emerald-500/20">
                <span className="text-emerald-400 font-medium tracking-wider">GET IN TOUCH</span>
              </div>
            </div>
          </div>

          <h1 className="relative text-center">
            <span className="inline-block text-7xl md:text-8xl font-bold text-transparent bg-clip-text 
                         bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400
                         [text-shadow:0_4px_30px_rgba(6,182,212,0.3)]">
              Let&apos;s Create
            </span>
            <span className="block text-4xl md:text-5xl mt-4 font-light bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              something amazing together
            </span>
          </h1>
        </div>

        {/* Contact Info Cards with Unique Design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl opacity-70
                           before:absolute before:inset-[1px] before:bg-[#040D19] before:rounded-2xl before:z-10
                           after:absolute after:inset-[1px] after:bg-gradient-to-r after:from-emerald-500 after:via-blue-500 after:to-purple-500 after:rounded-2xl after:opacity-0
                           after:transition-opacity after:duration-500 group-hover:after:opacity-10"></div>

              {/* Card Content */}
              <div className="relative z-20 p-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    {/* Animated Icon Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-500"></div>
                    <div className="relative p-4 bg-[#040D19]/80 rounded-xl border border-emerald-500/20">
                      <div className="text-emerald-400 group-hover:text-blue-400 transition-colors duration-500">
                        {info.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                      {info.title}
                    </h2>
                    <p className="mt-2 text-emerald-300/70">{info.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form with Unique Layout */}
        <div className="max-w-5xl mx-auto relative">
          {/* Form Container with Unique Border Animation */}
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl opacity-30"></div>
            
            <div className="relative rounded-2xl bg-[#040D19] overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Panel with Unique Design */}
                <div className="relative p-8 overflow-hidden">
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_-100px,#047857,transparent)]"></div>
                    <div className="absolute inset-0 backdrop-blur-3xl"></div>
                  </div>

                  <div className="relative">
                    <h2 className="text-4xl font-bold mb-6">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200
                                   drop-shadow-[0_2px_2px_rgba(6,182,212,0.3)]">
                        Start a Conversation
                      </span>
                    </h2>
                    <p className="text-lg text-emerald-100/90 leading-relaxed mb-12">
                      Have an idea that could change the world? Or just want to say hello? 
                      We&apos;re here to turn your vision into reality.
                    </p>

                    {/* Social Links with Unique Design */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-emerald-200">Connect With Us</h3>
                        <div className="flex space-x-6">
                          {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                            <a
                              key={platform}
                              href="#"
                              className="group/link relative px-4 py-2"
                            >
                              <span className="relative z-10 text-emerald-200 group-hover/link:text-sky-200 transition-colors">
                                {platform}
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-lg 
                                          scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300"></div>
                            </a>
                          ))}
                        </div>
                      </div>
                      
                      {/* Working Hours with Unique Design */}
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/5 to-sky-500/5 rounded-xl"></div>
                        <div className="relative">
                          <h3 className="text-xl font-semibold mb-2 text-emerald-200">Working Hours</h3>
                          <p className="text-emerald-100/90">
                            Monday - Friday
                            <span className="block text-sm text-emerald-200/80 mt-1">9:00 AM - 6:00 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Form with Unique Input Design */}
                <div className="p-8 bg-[#040D19]/80 backdrop-blur-xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Input Fields with Unique Animation */}
                    {[
                      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What\'s this about?' }
                    ].map((field) => (
                      <div key={field.name} className="relative">
                        <label className="block text-sm font-medium text-emerald-200 mb-2">
                          {field.label}
                        </label>
                        <div className="relative group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 rounded-lg opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            className="relative w-full px-4 py-3 bg-[#040D19] border border-emerald-500/30 rounded-lg 
                                   text-emerald-100 placeholder-emerald-500/50
                                   focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50
                                   transition duration-300"
                            placeholder={field.placeholder}
                            required
                          />
                        </div>
                      </div>
                    ))}

                    {/* Message Field */}
                    <div className="relative">
                      <label className="block text-sm font-medium text-emerald-200 mb-2">
                        Message
                      </label>
                      <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/50 to-blue-500/50 rounded-lg opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="relative w-full px-4 py-3 bg-[#040D19] border border-emerald-500/30 rounded-lg 
                                 text-emerald-100 placeholder-emerald-500/50
                                 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50
                                 transition duration-300"
                          placeholder="Tell us about your project..."
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button with Unique Animation */}
                    <button
                      type="submit"
                      className="relative w-full group overflow-hidden rounded-lg px-8 py-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 transition-transform duration-500
                                  group-hover:scale-[1.1] group-active:scale-[1.05]"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%]
                                  animate-shimmer"></div>
                      <span className="relative flex items-center justify-center text-lg font-medium text-emerald-50">
                        Send Message
                        <svg className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
