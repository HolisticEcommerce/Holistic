'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface CountUpProps {
  end: number;
  duration: number;
  suffix?: string;
}

const CountUpAnimation: React.FC<CountUpProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  // Format number with commas
  const formattedNumber = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div ref={countRef} className="relative group">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Number display */}
      <div className="relative">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110">
          {formattedNumber}{suffix}
        </div>
        
        {/* Animated line */}
        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
};




const achievementStats = [
  { number: '250+', label: 'Projects Completed', icon: '🚀' },
  { number: '50+', label: 'Team Members', icon: '👥' },
  { number: '10+', label: 'Years Experience', icon: '⭐' },
  { number: '99%', label: 'Client Satisfaction', icon: '💯' },
];

const companyTimeline = [
  { year: '2013', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
  { year: '2015', title: 'First Major Project', description: 'Successfully delivered our first enterprise solution' },
  { year: '2018', title: 'Global Expansion', description: 'Opened offices in multiple countries' },
  { year: '2023', title: 'Innovation Hub', description: 'Launched our innovation center for emerging technologies' },
];



export default function About() {
  const [, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      if (el.id) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 py-12 sm:py-20">
        {/* Animated Background - Adjusted for mobile */}
        <div className="absolute inset-0 -z-10">
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          
          {/* Animated Circles - Adjusted size for mobile */}
          <div className="absolute inset-0">
            <div className="absolute w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] -left-20 sm:-left-40 -top-20 sm:-top-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl animate-spin-slower" />
            </div>
            <div className="absolute w-[200px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[400px] md:h-[600px] -right-10 sm:-right-20 -bottom-10 sm:-bottom-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 blur-3xl animate-spin-slow" />
            </div>
          </div>
          
          {/* Grid Pattern - Adjusted size for mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:35px_35px]" />
        </div>

        {/* Main Content */}
        <div className="relative w-full max-w-7xl mx-auto">
          <div className="text-center">
            {/* Animated Tag - Adjusted padding and text size */}
            <div className="inline-block animate-fade-in-up">
              <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">New</span>
                <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm text-blue-300">Discover Our Latest Innovations</span>
              </div>
            </div>

            {/* Main Title - Responsive text sizes */}
            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="inline-block animate-title-slide-up">
                <span className="inline-block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Elevate Your
                </span>
              </span>
              <br />
              <span className="inline-block animate-title-slide-up animation-delay-150">
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </span>
            </h1>

            {/* Description - Adjusted text size and width */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-400 max-w-[90%] sm:max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
              We craft exceptional digital experiences that inspire, engage, and deliver remarkable results.
            </p>

            {/* CTA Section - Improved mobile layout */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up animation-delay-450">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur transition duration-1000 group-hover:blur-xl" />
                <div className="relative inline-flex items-center justify-center w-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-slate-900 rounded-lg leading-none">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>

              {/* Secondary CTA */}
              <button className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-transparent border-2 border-white/10 rounded-lg hover:bg-white/5 transition-colors duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats Grid with Animated Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">
              {achievementStats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    {/* Icon with glow effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative text-2xl sm:text-3xl lg:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </span>
                    </div>
                    
                    {/* Animated Counter */}
                    <CountUpAnimation
                      end={parseInt(stat.number.replace(/[^0-9]/g, ''))}
                      duration={2000}
                      suffix={stat.number.includes('+') ? '+' : ''}
                    />
                    
                    {/* Label with gradient underline */}
                    <div className="relative">
                      <div className="text-xs sm:text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                      <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>

                  {/* Card hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-all duration-500" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Decorative Elements - Adjusted for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float animation-delay-2000" />
        </div>
      </section>
  {/* 3D Gradient Border Divider */}
  <div className="relative h-24 overflow-hidden">
        {/* Main gradient border */}
        <div className="absolute inset-x-0 h-[2px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        {/* 3D effect layers */}
        
        {/* Animated glow effect */}
     

        {/* Edge fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent"></div>
      </div>
      {/* About Section */}
      <section className="relative py-24 px-4 overflow-hidden" id="about" data-animate>
        <div className="max-w-7xl mx-auto">
          {/* About Mission Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* About Card */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/40 hover:via-purple-500/40 hover:to-pink-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-xl p-8">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Us
                  </h3>
                  <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                  <p className="text-gray-300 leading-relaxed">
                    We are a dynamic digital agency committed to transforming ideas into impactful digital solutions. With expertise in web development, design, and digital marketing, we help businesses thrive in the digital landscape.
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 hover:from-purple-500/40 hover:via-pink-500/40 hover:to-orange-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-xl p-8">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                  <p className="text-gray-300 leading-relaxed">
                    To empower businesses with innovative digital solutions that drive growth, enhance user experience, and create lasting impact in the digital world. We strive for excellence in every project we undertake.
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-1 rounded-2xl bg-gradient-to-br from-pink-500/20 via-orange-500/20 to-yellow-500/20 hover:from-pink-500/40 hover:via-orange-500/40 hover:to-yellow-500/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-xl p-8">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-500">
                  <span className="text-4xl">🌟</span>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
                    Our Vision
                  </h3>
                  <div className="h-1 w-20 mx-auto bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                  <p className="text-gray-300 leading-relaxed">
                    To be the leading force in digital innovation, setting new standards in web development and digital solutions. We envision a future where every business can harness the full potential of digital technology.
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          </div>
{/* 3D Gradient Border Divider */}
<div className="relative h-24 overflow-hidden">
        {/* Main gradient border */}
        <div className="absolute inset-x-0 h-[2px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        {/* 3D effect layers */}
        
        {/* Animated glow effect */}
     

        {/* Edge fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent"></div>
      </div>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Since our founding in 2013, we&apos;ve been at the forefront of digital innovation, 
              helping businesses transform their ideas into powerful solutions.
            </p>
          </div>

          <div className="relative mt-20">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />

            {/* Timeline Items */}
            <div className="relative z-10">
              {companyTimeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center justify-center mb-20 last:mb-0 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    
                    {/* Content Card */}
                    <div className="group w-full transform transition-all duration-500 hover:scale-105">
                      <div className="relative p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl backdrop-blur-lg border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                        {/* Year Badge */}
                        <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold shadow-lg">
                          {item.year}
                        </div>
                        
                        {/* Content */}
                        <div className="mt-4">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-75 transition-opacity" />
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto 
                      ${index % 2 === 0 ? 'md:right-0' : 'md:left-0'}">
                      <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-blue-500/20 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
           
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
              Join Our Journey
            </button>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50 backdrop-blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </section>

      {/* 3D Gradient Border Divider */}
      <div className="relative h-24 overflow-hidden">
        {/* Main gradient border */}
        <div className="absolute inset-x-0 h-[2px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
        
        {/* 3D effect layers */}
        
        {/* Animated glow effect */}
     

        {/* Edge fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent"></div>
      </div>

      {/* CTA Section */}
      <section className="py-20 px-4" id="cta" data-animate>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join us in creating innovative solutions that drive success.
          </p>
          <button className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-white shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}
