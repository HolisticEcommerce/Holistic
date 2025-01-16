'use client';

import React from 'react';
import Link from 'next/link';
import NumberCounter from '@/components/NumberCounter';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaWordpress, FaHtml5, FaBootstrap, FaPhp } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiAngular, SiVuedotjs, SiMagento, SiDrupal, SiJoomla } from 'react-icons/si';
import { TbBrandJavascript } from 'react-icons/tb';   

const Globe3D = dynamic(() => import('@/components/Globe3D'), { ssr: false });

const stats = [
  { label: 'Active Users', value: 100, suffix: '+' },
  { label: 'Global Reach', value: 150, suffix: '+' },
  { label: 'Team Members', value: 50, suffix: '+' },
  { label: 'Success Rate', value: 99, suffix: '%' }
];

const technologies = [
  {
    name: 'React',
    icon: <FaReact className="w-12 h-12" />,
    description: 'Modern UI development with component-based architecture',
    color: 'text-cyan-400 group-hover:text-cyan-300',
    glowColor: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-12 h-12" />,
    description: 'Full-stack React framework for production',
    color: 'text-white group-hover:text-gray-100',
    glowColor: 'from-gray-600 to-gray-500'
  },
  {
    name: 'Angular',
    icon: <SiAngular className="w-12 h-12" />,
    description: 'Enterprise-level web application development',
    color: 'text-red-500 group-hover:text-red-400',
    glowColor: 'from-red-600 to-pink-600'
  },
  {
    name: 'Vue.js',
    icon: <SiVuedotjs className="w-12 h-12" />,
    description: 'Progressive JavaScript framework',
    color: 'text-emerald-500 group-hover:text-emerald-400',
    glowColor: 'from-emerald-600 to-green-600'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="w-12 h-12" />,
    description: 'Server-side JavaScript runtime',
    color: 'text-green-500 group-hover:text-green-400',
    glowColor: 'from-green-600 to-emerald-600'
  },
  {
    name: 'WordPress',
    icon: <FaWordpress className="w-12 h-12" />,
    description: 'Content management system development',
    color: 'text-blue-500 group-hover:text-blue-400',
    glowColor: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Drupal',
    icon: <SiDrupal className="w-12 h-12" />,
    description: 'Enterprise CMS solutions',
    color: 'text-blue-400 group-hover:text-blue-300',
    glowColor: 'from-blue-600 to-sky-600'
  },
  {
    name: 'Magento',
    icon: <SiMagento className="w-12 h-12" />,
    description: 'E-commerce platform development',
    color: 'text-orange-500 group-hover:text-orange-400',
    glowColor: 'from-orange-600 to-red-600'
  },
  {
    name: 'Joomla',
    icon: <SiJoomla className="w-12 h-12" />,
    description: 'CMS and web application framework',
    color: 'text-blue-500 group-hover:text-blue-400',
    glowColor: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Bootstrap',
    icon: <FaBootstrap className="w-12 h-12" />,
    description: 'Responsive front-end framework',
    color: 'text-purple-500 group-hover:text-purple-400',
    glowColor: 'from-purple-600 to-indigo-600'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-12 h-12" />,
    description: 'Utility-first CSS framework',
    color: 'text-cyan-500 group-hover:text-cyan-400',
    glowColor: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="w-12 h-12" />,
    description: 'Modern web markup language',
    color: 'text-orange-500 group-hover:text-orange-400',
    glowColor: 'from-orange-600 to-red-600'
  },
  {
    name: 'JavaScript',
    icon: <TbBrandJavascript className="w-12 h-12" />,
    description: 'Dynamic web programming',
    color: 'text-yellow-500 group-hover:text-yellow-400',
    glowColor: 'from-yellow-600 to-orange-600'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-12 h-12" />,
    description: 'Type-safe JavaScript development',
    color: 'text-blue-500 group-hover:text-blue-400',
    glowColor: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'PHP',
    icon: <FaPhp className="w-12 h-12" />,
    description: 'Server-side scripting language',
    color: 'text-indigo-500 group-hover:text-indigo-400',
    glowColor: 'from-indigo-600 to-purple-600'
  },
 
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden perspective-1000">
        {/* Sky Background */}
        <div className="absolute inset-0 z-0">
          <div className="night-sky">
            <div className="stars" />
            <div className="shooting-stars" />
            <div className="aurora" />
          </div>
        </div>

        {/* 3D Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 animate-gradient-x" />
          <div className="absolute w-[500px] h-[500px] -right-64 top-0 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute w-[500px] h-[500px] -left-64 bottom-0 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute w-[800px] h-[800px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>

        <div className="container relative mx-auto px-0 pt-20 pb-24 sm:pt-24 sm:pb-32 z-20">
          {/* Hero Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-12">
            {/* Main Heading with 3D Effect */}
            <div className="relative">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 animate-gradient-x pb-3">
                  Transforming Ideas
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 animate-gradient-x animate-delay-300">
                  Into Digital Reality
                </span>
              </h1>
              {/* 3D Floating Elements */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-float" />
                <div className="absolute top-10 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float animation-delay-1000" />
                <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl animate-float animation-delay-2000" />
              </div>
            </div>

            {/* Description with Typing Effect */}
            <p className="relative mx-auto max-w-2xl text-lg sm:text-xl text-gray-300 leading-8 typewriter">
              We specialize in creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts combines creativity with technical excellence.
            </p>

            {/* CTA Buttons with 3D Hover Effect */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link 
                href="/contact"
                className="group relative px-6 py-3 text-sm sm:text-base font-semibold text-white transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg transform-gpu transition-transform ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-lg bg-black/50 backdrop-blur-sm transform-gpu transition-transform ease-out group-hover:scale-105" />
                <span className="relative flex items-center justify-center">
                  Free Consultation
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/about"
                className="group relative px-6 py-3 text-sm sm:text-base font-semibold text-white transform-gpu transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg transform-gpu transition-transform ease-out group-hover:scale-105" />
                <div className="absolute inset-0 rounded-lg bg-black/50 backdrop-blur-sm transform-gpu transition-transform ease-out group-hover:scale-105" />
                <span className="relative flex items-center justify-center">
                  Learn More
                  <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* 3D Stats Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="group relative perspective overflow-visible">
                  <div className="relative transform transition-all duration-500 group-hover:rotate-y-180 preserve-3d">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg backdrop-blur-sm border border-white/10" />
                    <div className="relative px-4 py-6 text-center transform-gpu transition-transform">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-2 min-h-[48px] flex items-center justify-center">
                        <NumberCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                        />
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

              {/* About Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] animate-pulse" />
          <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-green-100/50 via-teal-100/30 to-transparent" />
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-purple-100/50 via-blue-100/30 to-transparent" />
          {/* Improved Animated circles with better positioning and effects */}
          <div className="absolute top-1/4 -right-20 w-72 h-72 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-200 to-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-2 bg-emerald-500/10 rounded-full py-2 px-6 mb-6 shadow-lg shadow-emerald-500/25 backdrop-blur-sm border border-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">About Our Agency</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
              Beyond Code
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </h2>
            <p className="text-xl text-emerald-600/90 mt-8 max-w-2xl mx-auto leading-relaxed">
              Where innovation meets imagination, and technology transforms into extraordinary experiences.
            </p>
          </div>

          {/* Enhanced Interactive Timeline with modern SVG icons */}
          <div className="relative mb-32">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>
            
            {[
              {
                year: '2023',
                title: 'Digital Evolution',
                description: 'Pioneering the future of web development with AI integration',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                side: 'left',
                gradient: 'from-emerald-400 to-teal-400'
              },
              {
                year: '2022',
                title: 'Global Expansion',
                description: 'Reaching new horizons with international partnerships',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                side: 'right',
                gradient: 'from-teal-400 to-cyan-400'
              },
              {
                year: '2021',
                title: 'Innovation Hub',
                description: 'Establishing our center for technological breakthroughs',
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                side: 'left',
                gradient: 'from-cyan-400 to-blue-400'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  item.side === 'right' ? 'md:ml-auto' : ''
                } w-full md:w-[45%]`}
              >
                <div className={`relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 group ${
                  item.side === 'left' ? 'md:text-right' : ''
                }`}>
                  <div className={`absolute top-1/2 ${
                    item.side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                  } -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="inline-block text-sm font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Feature Cards with modern SVG icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Creative Vision',
                description: 'Transforming ideas into digital masterpieces',
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                gradient: 'from-emerald-400 to-teal-400'
              },
              {
                title: 'Technical Excellence',
                description: 'Crafting robust and scalable solutions',
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                  </svg>
                ),
                gradient: 'from-teal-400 to-cyan-400'
              },
              {
                title: 'Innovation Drive',
                description: 'Pushing boundaries with cutting-edge tech',
                icon: (
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                gradient: 'from-cyan-400 to-blue-400'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/100"
              >
                <div className="relative w-20 h-20 mx-auto mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500`}></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section with 3D effect */}
          <div className="relative transform hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transform -skew-y-3 rounded-3xl shadow-xl"></div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 rounded-3xl bg-gradient-to-r from-emerald-400/95 to-cyan-400/95 text-white transform skew-y-3">
              {[
                { number: 250, label: 'Projects Delivered', suffix: '+' },
                { number: 50, label: 'Team Experts', suffix: '+' },
                { number: 10, label: 'Years Experience', suffix: '+' },
                { number: 99, label: 'Client Satisfaction', suffix: '%' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group transform -skew-y-3"
                >
                  <div className="relative">
                    <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                      <NumberCounter end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-white/40 mx-auto transition-all duration-500 rounded-full"></div>
                  </div>
                  <div className="text-lg font-medium text-white/90 mt-3">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Decorative Elements */}
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
          </div>

          {/* Enhanced CTA with modern hover effect */}
          <div className="text-center mt-24">
            <Link 
              href="/about"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-400 to-cyan-400 text-white text-lg font-semibold rounded-xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/25"
            >
              Discover Our Story
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>
   {/* About Agency Section */}
   <section className="relative py-24 overflow-hidden bg-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center justify-center space-x-2 bg-emerald-500/10 rounded-full py-2 px-6 mb-6 shadow-lg shadow-emerald-500/25 backdrop-blur-sm border border-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">About Our Agency</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 text-transparent bg-clip-text">
              Crafting Digital Excellence Since 2015
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              We&apos;re a team of passionate creators, innovators, and problem solvers dedicated to transforming your digital vision into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: 'Innovation',
                description: 'Pushing boundaries with cutting-edge solutions',
                gradient: 'from-blue-500 via-emerald-500 to-purple-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                )
              },
              {
                title: 'Communication',
                description: 'Clear, open, and effective dialogue',
                gradient: 'from-emerald-500 via-blue-500 to-purple-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002 2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                )
              },
              {
                title: 'Quality',
                description: 'Delivering excellence in every project',
                gradient: 'from-purple-500 via-blue-500 to-emerald-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Efficiency',
                description: 'Optimized processes for faster delivery',
                gradient: 'from-emerald-500 via-purple-500 to-blue-500',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm4-4v.01" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-900 p-1 rounded-2xl h-full">
                  <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl h-full p-6">
                    <div className={`w-16 h-16 mb-8 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mb-20">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 rounded-3xl blur opacity-75" />
            <div className="relative bg-slate-900 p-1 rounded-3xl">
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-8 text-white">
                  {[
                    { value: '8+', label: 'Years of Excellence' },
                    { value: '200+', label: 'Projects Completed' },
                    { value: '50+', label: 'Team Members' },
                    { value: '15+', label: 'Countries Reached' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 text-transparent bg-clip-text">
                        <span className="inline-block">{stat.value}</span>
                      </div>
                      <div className="text-sm md:text-base mt-2 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-block mb-6">
                <div className="relative">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                    Our Mission
                  </h3>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </div>
              </div>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              <Link href="/about" className="group relative inline-flex items-center gap-3 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Join Our Journey</span>
                <svg className="w-5 h-5 ml-2 relative transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
   {/* Services Section */}
   <section className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/3 -left-64 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse-slow delay-150" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-emerald-500/10 rounded-full py-2 px-6 mb-6 shadow-lg shadow-emerald-500/25 backdrop-blur-sm border border-emerald-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-semibold tracking-wide uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-6 animate-gradient">
              Transforming Ideas into
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Elevating your digital presence with innovative solutions and cutting-edge technologies
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l-5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                ),
                title: 'Creative Design',
                description: 'Crafting visually stunning and intuitive user experiences',
                href: '/services/ui-ux-design',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Web Development',
                description: 'Building robust and scalable web applications',
                href: '/services/web-development',
                gradient: 'from-teal-500 to-cyan-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm4-4v.01" />
                  </svg>
                ),
                title: 'Mobile Apps',
                description: 'Creating seamless mobile experiences for iOS and Android',
                href: '/services/mobile-development',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  </svg>
                ),
                title: 'Digital Marketing',
                description: 'Boosting online visibility and driving conversions',
                href: '/services/digital-marketing',
                gradient: 'from-blue-500 to-indigo-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Cyber Security',
                description: 'Advanced security measures with SSL encryption and regular updates',
                href: '/services/cyber-security',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Ecommerce Services',
                description: 'Ecommerce solutions for seamless online shopping experiences',
                href: '/services/ecommerce-services',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Shine Effect */}
                <div className="service-shine" />
                
                {/* Service Icon */}
                <div className={`service-icon bg-gradient-to-br ${service.gradient}`}>
                  {service.icon}
                </div>
                
                {/* Service Content */}
                <h3 className="text-lg font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                {/* Read More Button */}
                <div className="service-button">
                  {service.href && (
                    <Link href={service.href} className="service-button-text">
                      Read More
                      <svg 
                        className="service-button-icon" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </Link>
                  )}
                </div>
                
                {/* Hover Effects */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent rounded-full -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Web Design Packages Section */}
       <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F2242] to-[#1A2B5C]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 -left-64 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse-slow delay-150" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 backdrop-blur-sm border border-teal-500/20">
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                  Pricing Plans
                </span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text mb-6">
              <span className="relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-full blur-2xl"></span>
                <span className="relative text-slate-50">Web Designing Package</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
                For All Business Size
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Choose the perfect package that suits your business needs and goals
            </p>
          </div>

          {/* Business Type Selection */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {['Choose Business Type', 'Start Up', 'Small Size', 'Mid Size', 'Large Size'].map((type, index) => (
              <button
                key={index}
                className="px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-100 hover:text-white text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 group"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto">
            {[
              {
                name: 'STARTUP',
                price: '₹ 6,999',
                duration: '(5-7 days)',
                href: '/contact?plan=startup',
                features: {
                  mainFeatures: {
                    'Domain Name': true,
                    'Website Hosting': true,
                    'Business Email': true,
                    'Secured Certificate': true,
                    
                  },
                  design: {
                    'Home Page Design': '5-10 Pages',
                    'Inner Pages Design': '5-10 Pages',
                    'One-off Home Page': true,
                    'Responsive Design': true,
                    'Storage Page Design': true,
                    'YouTube Video Embed': true,
                    'Custom Design': true
                  },
                  functionality: {
                    'WhatsApp Chat Box': true,
                    'Sliding Banner': true,
                    'Blog Setup': false,
                    'Lead Connect': true,
                    'Mobile Ready': true
                  },
                  seoReadiness: {
                    'Page tags (H1,H2,H3)': true,
                    'HTML & Meta Changes': false,
                    'Basic Google Analytics': false,
                    'Search Console': false,
                    'Meta tags Description': true,
                    'Graphical Optimization': true,
                    'Image Optimization': true
                  },
                  additionalServices: {
                    'Payment Gateway': 'Add Charge',
                    'Shopping Cart': 'Add Charge',
                    'E-commerce Setup': 'Add Charge'
                  },
                  support: {
                    'Live Chat Support': true,
                    'WhatsApp Support': true,
                    'Phone Support': true,
                    'Timeline Training': 'Up to 1 Hour',
                    'Post Implementation Period': '15 Days'
                  }
                }
              },
              {
                name: 'PREMIUM',
                price: '₹ 9,999',
                duration: '(7-10 days)',
                popular: true,
                href: '/contact?plan=premium',
                features: {
                  mainFeatures: {
                    'Domain Name': true,
                    'Website Hosting': true,
                    'Business Email': true,
                    'Secured Certificate': true,
                    
                  },
                  design: {
                    'Home Page Design': '10-15 Pages',
                    'Inner Pages Design': '10-15 Pages',
                    'One-off Home Page': true,
                    'Responsive Design': true,
                    'Storage Page Design': true,
                    'YouTube Video Embed': true,
                    'Custom Design': true
                  },
                  functionality: {
                    'WhatsApp Chat Box': true,
                    'Sliding Banner': true,
                    'Blog Setup': false,
                    'Lead Connect': true,
                    'Mobile Ready': true
                  },
                  seoReadiness: {
                    'Page tags (H1,H2,H3)': true,
                    'HTML & Meta Changes': false,
                    'Basic Google Analytics': false,
                    'Search Console': false,
                    'Meta tags Description': true,
                    'Graphical Optimization': true,
                    'Image Optimization': true
                  },
                  additionalServices: {
                    'Payment Gateway': 'Add Charge',
                    'Shopping Cart': 'Add Charge',
                    'E-commerce Setup': 'Add Charge'
                  },
                  support: {
                    'Live Chat Support': true,
                    'WhatsApp Support': true,
                    'Phone Support': true,
                    'Timeline Training': 'Up to 2 Hours',
                    'Post Implementation Period': '15 Days'
                  }
                }
              },
           
              {
                name: 'ADVANCE',
                price: '₹ 14,999',
                duration: '(15-20 days)',
                href: '/contact?plan=advance',
                features: {
                  mainFeatures: {
                    'Domain Name': true,
                    'Website Hosting': true,
                    'Business Email': true,
                    'Secured Certificate': true,
                   
                  },
                  design: {
                    'Home Page Design': '15-20 Pages',
                    'Inner Pages Design': '15-20 Pages',
                    'One-off Home Page': true,
                    'Responsive Design': true,
                    'Storage Page Design': true,
                    'YouTube Video Embed': true,
                    'Custom Design': true
                  },
                  functionality: {
                    'WhatsApp Chat Box': true,
                    'Sliding Banner': true,
                    'Blog Setup': true,
                    'Lead Connect': true,
                    'Mobile Ready': true
                  },
                  seoReadiness: {
                    'Page tags (H1,H2,H3)': true,
                    'HTML & Meta Changes': true,
                    'Basic Google Analytics': true,
                    'Search Console': true,
                    'Meta tags Description': true,
                    'Graphical Optimization': true,
                    'Image Optimization': true
                  },
                  additionalServices: {
                    'Payment Gateway': true,
                    'Shopping Cart': true,
                    'E-commerce Setup': true
                  },
                  support: {
                    'Live Chat Support': true,
                    'WhatsApp Support': true,
                    'Phone Support': true,
                    'Timeline Training': 'Up to 4 Hours',
                    'Post Implementation Period': '25 Days'
                  }
                }
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative group rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500 ${
                  pkg.popular 
                    ? 'md:-mt-8 border-2 border-fuchsia-500/20'
                    : index === 0
                    ? 'border-2 border-teal-500/20'
                    : 'border-2 border-indigo-500/20'
                }`}
              >
                {/* Card Background */}
                <div className="absolute inset-0">
                  <div className={`absolute inset-0 transition-all duration-500 group-hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-pink-500/5'
                      : index === 0
                      ? 'bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5'
                      : 'bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5'
                  }`} />
                </div>

               {/* Card Content */}
               <div className="relative p-6 md:p-8">
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      pkg.popular 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400'
                        : index === 0
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
                    }`}>
                      {pkg.name}
                    </h3>
                    <div className="flex items-center justify-center mb-2">
                      <div className={`text-4xl md:text-5xl font-bold ${
                        pkg.popular 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400'
                          : index === 0
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400'
                          : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
                      }`}>
                        {pkg.price}
                      </div>
                    </div>
                    <div className={`text-sm ${
                      pkg.popular 
                        ? 'text-fuchsia-300'
                        : index === 0
                        ? 'text-teal-300'
                        : 'text-indigo-300'
                    }`}>
                      {pkg.duration}
                    </div>
                  </div>

                  {/* Features List */}
                  {Object.entries(pkg.features).map(([category, items], catIndex) => (
                    <div key={catIndex} className="mb-6 last:mb-0">
                      <h4 className={`text-sm font-semibold mb-3 uppercase ${
                        pkg.popular 
                          ? 'text-fuchsia-300'
                          : index === 0
                          ? 'text-teal-300'
                          : 'text-indigo-300'
                      }`}>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(items).map(([feature, value], featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-between">
                            <span className="text-gray-300">{feature}</span>
                            {typeof value === 'boolean' ? (
                              <svg 
                                className={`w-5 h-5 ${value ? 'text-emerald-400' : 'text-gray-500'}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                {value ? (
                                 <React.Fragment>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                    <path d="M7.5 12.5l3 3 6-6" className="text-emerald-400" strokeWidth="2.5" />
                                  </React.Fragment>
                                ) : (
                                  <React.Fragment>
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                    <path d="M15 9l-6 6M9 9l6 6" className="text-gray-500" strokeWidth="2.5" />
                                  </React.Fragment>
                                )}
                              </svg>
                            ) : (
                              <span className={`text-sm ${
                                value === 'Add Charge'
                                  ? 'text-yellow-400'
                                  : pkg.popular
                                  ? 'text-fuchsia-400'
                                  : index === 0
                                  ? 'text-teal-400'
                                  : 'text-indigo-400'
                              }`}>
                                {typeof value === 'string' ? value : String(value)}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                {/* Enquire Button */}
                  <div className="relative mt-8">
                    <Link 
                      href={pkg.href}
                      className={`group relative block w-full overflow-hidden rounded-xl transition-all duration-500 ${
                        pkg.popular 
                          ? 'hover:shadow-lg hover:shadow-fuchsia-500/20'
                          : index === 0
                          ? 'hover:shadow-lg hover:shadow-teal-500/20'
                          : 'hover:shadow-lg hover:shadow-indigo-500/20'
                      }`}
                    >
                      {/* Button Background */}
                      <div className="absolute inset-0">
                        <div className={`absolute inset-0 transition-all duration-500 group-hover:scale-105 ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500'
                            : index === 0
                            ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
                            : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500'
                        }`} />
                      </div>

                      {/* Button Content */}
                      <div className="relative py-3 px-6">
                        <div className="flex items-center justify-center space-x-3">
                          <span className="font-semibold text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
                            Enquire Now
                          </span>
                          <svg className="w-5 h-5 ml-2 text-white transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Contact */}
        
        </div>
      </section>
  {/* Features Section */}
  <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-green-100/50 to-transparent" />
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-purple-100/50 to-transparent" />
          {/* Animated circles */}
          <div className="absolute top-1/4 -right-20 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <div className="relative px-6 py-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full border border-green-100">
                  <span className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold">
                 Why Choose Us
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-40 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Features that Set Us Apart
                </span>
              </h2>
             
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm4-4v.01" />
                      </svg>
                    </div>
                  </div>
                ),
                title: 'Responsive Design',
                description: 'Perfectly adapts to any screen size with fluid animations and layouts'
              },
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                ),
                title: 'Lightning Fast',
                description: 'Optimized performance with next-gen compression and caching'
              },
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ),
                title: 'Modern Stack',
                description: 'Built with the latest technologies for scalability and maintainability'
              },
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl -rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-ceQualitynter justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                ),
                title: 'Enterprise Security',
                description: 'Advanced security measures with SSL encryption and regular updates'
              },
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                  </div>
                ),
                title: 'Custom Modules',
                description: 'Flexible architecture allowing for custom module integration'
              },
              {
                icon: (
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-400 rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                ),
                title: '24/7 Support',
                description: 'Round-the-clock expert support for your peace of mind'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-indigo-50 rounded-2xl opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
                <div className="absolute inset-[1px] bg-white rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 text-transparent bg-clip-text group-hover:from-teal-500 group-hover:via-cyan-500 group-hover:to-indigo-500 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Technologies Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
        <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-full py-2 px-6 mb-6 shadow-lg shadow-blue-500/10 backdrop-blur-sm border border-blue-500/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-blue-700 text-sm font-semibold tracking-wide uppercase">Our Tech Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent mb-8 animate-gradient">
              Technologies We Use
            </h2>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`mb-4 ${tech.color}`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">{tech.name}</h3>
                <p className="text-slate-400">{tech.description}</p>
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.glowColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* Appointment Section */}
    <section className="relative py-20 bg-gradient-to-br from-[#e8f5e9] via-[#e3f2fd] to-[#f3e5f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 rounded-2xl blur opacity-20 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-violet-100">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="text-gray-600 font-medium">Live & Available</h3>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl opacity-70 blur group-hover:opacity-100 transition duration-300"></div>
                      <button className="relative px-6 py-2 bg-black rounded-xl flex items-center space-x-2 transform hover:scale-105 transition duration-300">
                        <div className="relative">
                          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-spin-slow opacity-50 blur-sm"></div>
                          <span className="relative text-xl">💫</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Limited Time</span>
                          <span className="text-sm font-bold text-white">FREE CONSULTATION</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative mb-8">
                    <div className="absolute -left-4 -top-4 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full blur-2xl"></div>
                    <h2 className="relative text-4xl lg:text-5xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Transform Your Vision
                      </span>
                      <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Into Reality
                      </span>
                    </h2>
                    <p className="relative text-lg text-gray-600/90 leading-relaxed">
                      Available 24/7 for all your digital needs. Let&apos;s create something extraordinary together.
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-bl from-purple-600/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                    <div className="relative flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700/50 shadow-xl">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <span className="text-2xl filter drop-shadow-md">📞</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300 font-medium mb-0.5">Call us anytime</p>
                        <p className="text-lg font-bold text-white">
                          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text">
                            +91-9319695241
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Appointment Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 rounded-2xl blur opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-white/20">
                  <form className="space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">👤</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-300"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">📱</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-300"
                      />
                    </div>

                    <div className="relative group">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <span className="text-xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">🔧</span>
                      </div>
                      <select className="w-full pl-12 pr-10 py-4 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-gray-700 shadow-sm transition-all duration-300 appearance-none cursor-pointer">
                        <option value="">Select Service</option>
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute top-4 left-4 pointer-events-none">
                        <span className="text-xl bg-gradient-to-br from-cyan-500 to-blue-600 bg-clip-text text-transparent">✍️</span>
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Write Message"
                        className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-100 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-gray-700 placeholder-gray-400 shadow-sm transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="relative w-full group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-xl opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative px-8 py-4 flex items-center justify-center space-x-2">
                        <span className="text-white font-semibold text-lg">Make an Appointment</span>
                        <svg className="w-6 h-6 text-white transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H3" />
                        </svg>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Global Presence Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-[#0F172A]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/0 via-cyan-900/10 to-gray-900/0" />
          <div className="absolute top-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-1/3 -left-64 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse-slow delay-150" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent mb-6">
              <span className="relative">
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full blur-2xl"></span>
                <span className="relative text-slate-50">Our Global Client&apos;s Presence</span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                Trusted by businesses worldwide
              </span>
            </h2>
            <p className="text-cyan-100 text-lg md:text-xl leading-relaxed mb-10">
              Delivering holistic wellness solutions across continents
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-3xl font-bold text-teal-400 mb-2">500+</div>
              <div className="text-gray-300">Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Interactive Globe */}
          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-cyan-900/50">
              <Globe3D />
            </div>
          </div>

          {/* Region Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-cyan-400 font-semibold mb-1">Middle East & GCC</div>
              <div className="text-gray-400 text-sm">150+ Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-teal-400 font-semibold mb-1">North America</div>
              <div className="text-gray-400 text-sm">200+ Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-emerald-400 font-semibold mb-1">South America</div>
              <div className="text-gray-400 text-sm">100+ Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-800/50">
              <div className="text-blue-400 font-semibold mb-1">Asia Pacific</div>
              <div className="text-gray-400 text-sm">50+ Clients</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/25">
              Explore Global Opportunities
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    
      {/* Testimonials Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
          <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-green-100/50 to-transparent" />
          <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-purple-100/50 to-transparent" />
          {/* Animated circles */}
          <div className="absolute top-1/4 -right-20 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <div className="relative px-6 py-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full border border-green-100">
                  <span className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text font-semibold">
                    Client Testimonials
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-40 h-40 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
              <h2 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Discover why businesses trust us for their digital transformation journey
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc.',
                content: 'Working with this team has been transformative for our business. Their attention to detail and innovative solutions exceeded our expectations.',
                image: '/testimonials/avatar1.svg',
                gradient: 'from-green-100 to-emerald-100',
                rating: 5
              },
              {
                name: 'Michael Chen',
                role: 'CTO, Innovation Labs',
                content: 'The level of expertise and professionalism is outstanding. They delivered a complex project on time and with exceptional quality.',
                image: '/testimonials/avatar2.svg',
                gradient: 'from-blue-100 to-cyan-100',
                rating: 5
              },
              {
                name: 'Emily Williams',
                role: 'Marketing Director, Growth Co.',
                content: 'Their creative approach and technical excellence have helped us achieve remarkable results. A truly reliable technology partner.',
                image: '/testimonials/avatar3.svg',
                gradient: 'from-purple-100 to-violet-100',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl transition-all duration-500"
              >
                {/* Card Background with Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 via-sky-100 to-violet-100 rounded-2xl opacity-50 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="absolute inset-[2px] bg-white rounded-2xl backdrop-blur-xl" />
                
                {/* Content */}
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-2 text-6xl leading-none text-green-200 font-serif">&#8220;</div>
                  
                  {/* Rating */}
                  <div className="flex justify-end mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    {testimonial.content}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 rounded-full animate-spin-slow opacity-70 blur-sm" />
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-violet-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transform scale-[1.02] pointer-events-none transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  text: '100% Satisfaction',
                  color: 'text-green-500'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ),
                  text: '5-Star Rated',
                  color: 'text-blue-500'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      />
                  </svg>
                  ),
                  text: 'Verified Reviews',
                  color: 'text-purple-500'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
    </main>
   

  );
}