'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

// Optimize performance by memoizing services data
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
} as const;

// Optimize performance by memoizing nav items
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Case Study', href: '/case-study' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Optimize scroll handler with useCallback and debounce
  const handleScroll = useCallback(() => {
    const shouldBeScrolled = window.scrollY > 50;
    if (shouldBeScrolled !== scrolled) {
      setScrolled(shouldBeScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

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
    setIsOpen(false);
  }, [pathname]);

  // Optimize mobile menu close handler
  const handleMobileMenuClose = useCallback(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  }, []);

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
            <div className="relative transform transition-all duration-500 group-hover:scale-110">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent animate-gradient-x relative">
                HOLISTIC ECOMMERCE
                <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-emerald-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg -z-10" />
                <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 blur-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 origin-left -z-20" />
              </div>
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
        <div 
          className={`
            fixed md:hidden inset-0 z-50 transition-all duration-500 ease-in-out bg-gradient-to-b from-[#0f1729] to-[#1a2436]
            ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          `}
        >
          {/* Content container with scroll */}
          <div className="relative h-full overflow-y-auto overflow-x-hidden">
            {/* Header with logo and close button */}
            <div className="sticky top-0 z-10 bg-[#0f1729]/95 border-b border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between p-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-white">HOLISTIC</span>
                </Link>
                <button
                  onClick={() => handleMobileMenuClose()}
                  className="relative group p-2 touch-manipulation"
                  aria-label="Close menu"
                >
                  <div className="relative transform transition-all duration-300 group-hover:scale-110">
                    <span className="block w-6 h-0.5 bg-white transform rotate-45" />
                    <span className="block w-6 h-0.5 bg-white transform -rotate-45 -translate-y-0.5" />
                  </div>
                </button>
              </div>
            </div>

            {/* Navigation links with animations */}
            <nav className="relative px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <div key={item.name} 
                  className={`transform transition-all duration-500 delay-${index * 100} ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                >
                  {item.name === 'Services' ? (
                    <div className="relative">
                      <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className="w-full p-4 text-left text-lg font-semibold text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between touch-manipulation"
                        aria-expanded={mobileSubmenuOpen}
                      >
                        <span>Services</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 text-white ${mobileSubmenuOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        mobileSubmenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-2 pb-4">
                          {Object.entries(services).map(([category, items]) => (
                            <div key={category} className="mb-4 last:mb-0">
                              <div className="px-4 py-2 text-sm font-bold text-cyan-400 uppercase tracking-wider">
                                {category}
                              </div>
                              <div className="space-y-1">
                                {items.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    onClick={() => handleMobileMenuClose()}
                                    className="block px-6 py-3 text-base text-white hover:bg-white/5 transition-colors touch-manipulation active:bg-white/10 rounded-lg"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => handleMobileMenuClose()}
                      className="block p-4 text-lg font-semibold text-white hover:bg-white/5 rounded-lg transition-colors touch-manipulation active:bg-white/10"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Bottom section */}
            <div className="fixed bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#0f1729] to-transparent">
              <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-center text-white space-y-2">
                  <p className="text-sm font-medium">Need help? Contact us</p>
                  <Link 
                    href="/contact"
                    onClick={() => handleMobileMenuClose()}
                    className="block w-full py-2 px-4 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
