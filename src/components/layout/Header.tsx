'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const services = {
    'Design Services': [
      { name: 'Website Design', href: '/services/website-design' },
      { name: 'Graphics Design', href: '/services/graphics-design' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    ],
    'Development Services': [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'E-commerce Services', href: '/services/ecommerce' },
    ],
    'Marketing Services': [
      { name: 'Search Engine Optimization', href: '/services/seo' },
      { name: 'Pay Per Click', href: '/services/ppc' },
      { name: 'Video Marketing', href: '/services/video-marketing' },
      { name: 'Content Marketing', href: '/services/content-marketing' },
    ],
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Case Study', href: '/case-study' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      {/* Glassmorphism Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1729] via-[#0f1729]/95 to-[#0f1729] backdrop-blur-xl" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-emerald-900/10 animate-gradient-x opacity-40" />
        
        {/* Mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-purple-500/10 to-transparent blur-3xl" />
          <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
        </div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise" />
      </div>
      
      {/* Top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Bottom gradient border with double line effect */}
      <div className="absolute inset-x-0 bottom-0">
        {/* Upper line */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        {/* Lower line with glow */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-75">
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>
      </div>

      <nav className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group perspective">
            <div className="relative transform transition-all duration-300 group-hover:rotate-x-12 group-hover:scale-110">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-gradient-x">
                HOLISTIC
              </div>
              {/* Logo Shadow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-8 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-xl -z-10 group-hover:opacity-100 opacity-0 transition-opacity" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Regular Nav Items Before Services */}
            <Link
              href="/"
              className="group relative px-4 py-2 perspective"
              onMouseEnter={() => setServicesOpen(false)}
            >
              <div className="relative transform transition-all duration-300 group-hover:translate-z-8 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10" />
                <span className="relative font-medium text-white text-opacity-90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-emerald-400 transition-all">
                  Home
                </span>
              </div>
            </Link>

            <Link
              href="/about"
              className="group relative px-4 py-2 perspective"
              onMouseEnter={() => setServicesOpen(false)}
            >
              <div className="relative transform transition-all duration-300 group-hover:translate-z-8 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10" />
                <span className="relative font-medium text-white text-opacity-90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-emerald-400 transition-all">
                  About
                </span>
              </div>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              ref={servicesRef}
            >
              <Link
                href="/services"
                className="group relative px-4 py-2 perspective inline-block"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <div className="relative transform transition-all duration-300 group-hover:translate-z-8 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10" />
                  <span className="relative font-medium text-white text-opacity-90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-emerald-400 transition-all">
                    Services
                    <svg
                      className={`inline-block w-4 h-4 ml-1 transform transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-[280px] rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-300 transform origin-top ${
                  servicesOpen 
                    ? 'opacity-100 scale-y-100 translate-y-0' 
                    : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 to-gray-800/95" />
                <div className="relative py-2">
                  {Object.entries(services).map(([category, items]) => (
                    <div key={category} className="group">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-400">
                        {category}
                      </div>
                      {items.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-6 py-2 text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          <span className="font-medium hover:bg-gradient-to-r hover:from-purple-400 hover:via-cyan-400 hover:to-emerald-400 hover:text-transparent hover:bg-clip-text transition-all">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                      <div className="mx-4 my-2 border-b border-white/10 last:border-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Nav Items */}
            {navItems.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 perspective"
                onMouseEnter={() => setServicesOpen(false)}
              >
                <div className="relative transform transition-all duration-300 group-hover:translate-z-8 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10" />
                  <span className="relative font-medium text-white text-opacity-90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-emerald-400 transition-all">
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group perspective"
          >
            <div className="relative transform transition-all duration-300 group-hover:scale-110">
              <div className="flex flex-col space-y-1">
                <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transform transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="space-y-2 bg-black/20 backdrop-blur-lg rounded-lg p-2">
            {/* Services Menu for Mobile */}
            <div className="relative">
              <button
                onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                className="w-full px-4 py-2 text-white hover:text-cyan-400 rounded-lg transition-all relative group overflow-hidden flex justify-between items-center"
              >
                <span className="relative z-10">Services</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ${mobileSubmenuOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {Object.entries(services).map(([category, items]) => (
                  <div key={category} className="px-2">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-400">
                      {category}
                    </div>
                    {items.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileSubmenuOpen(false);
                        }}
                        className="block px-6 py-2 text-white hover:bg-white/10 rounded-lg transition-all"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="mx-4 my-2 border-b border-white/10 last:border-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Other Nav Items */}
            {navItems.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white hover:text-cyan-400 rounded-lg transition-all relative group overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Sliding Border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
