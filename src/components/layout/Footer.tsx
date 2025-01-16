'use client';

import Link from "next/link";
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setIsEmailFocused(false);
  };

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'Cyber Security', href: '/services/cyber-security' },
    { name: 'Digital Marketing', href: '/services/digital-marketing' },
  ];

  const socialLinks = [
    { name: 'T', href: 'https://twitter.com' },
    { name: 'F', href: 'https://facebook.com' },
    { name: 'I', href: 'https://instagram.com' },
    { name: 'L', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-[#0F172A] to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                <div className="absolute inset-0.5 bg-gray-900 rounded-[10px] transform rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text transform -rotate-45">H</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">Holistic</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming ideas into digital reality through innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg transform transition-all duration-300 group-hover:rotate-45" />
                  <div className="absolute inset-0.5 bg-gray-900 rounded-[7px] flex items-center justify-center">
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="group">
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">Stay updated with our latest news and updates.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className={`relative group ${isEmailFocused ? 'ring-2 ring-cyan-500 rounded-lg' : ''}`}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300" />
                <div className="relative flex bg-gray-900 rounded-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-transparent border-none focus:outline-none text-gray-300 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="p-2 text-white rounded-r-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                  >
                    →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
            <div className="text-gray-400 text-sm">
              {new Date().getFullYear()} Holistic. All rights reserved.
            </div>
            <div className="flex space-x-8">
              {[
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Cookie Policy', href: '/cookies' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;