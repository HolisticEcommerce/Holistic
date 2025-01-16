'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck} from 'react-icons/fi';

const services = [
  {
    title: 'Website Design',
    description: 'We design attractive and SEO-friendly websites that cover all your business needs. Our web designer makes an attractive website',
    icon: '/icons/website-design.svg',
    href: '/services/web-design',
    color: 'from-blue-600 to-cyan-500',
    features: [
      'Custom UI/UX Design',
      'Responsive Layouts',
      'SEO Optimization',
      'Performance Focus'
    ],
    stats: {
      'Projects': '100+',
      'Satisfaction': '99%',
      'Support': '24/7'
    }
  },
  {
    title: 'Website Development',
    description: 'Our Development team of experts builds attractive websites that actually perform & proceed with your expectations.',
    icon: '/icons/website-development.svg',
    href: '/services/web-development',
    color: 'from-emerald-600 to-teal-500',
    features: [
      'Modern Technologies',
      'Clean Code',
      'Fast Performance',
      'Scalable Solutions'
    ],
    stats: {
      'Clients': '50+',
      'Uptime': '99.9%',
      'Response': '<2hrs'
    }
  },
  {
    title: 'App Development',
    description: 'We build potential, economical Android & iOS mobile applications with an aim to collaborate your ideas and convert them into real products.',
    icon: '/icons/app-development.svg',
    href: '/services/app-development',
    color: 'from-indigo-600 to-blue-500',
    features: [
      'Native Apps',
      'Cross-Platform',
      'Cloud Integration',
      'Push Notifications'
    ],
    stats: {
      'Downloads': '1M+',
      'Rating': '4.8',
      'Platforms': '2+'
    }
  },
  {
    title: 'Search Engine Optimization',
    description: 'Search Engines are the most dominant way to get your website indicated by potential customers. SEO helps to provide your website with top Rank.',
    icon: '/icons/seo.svg',
    href: '/services/seo',
    color: 'from-teal-600 to-emerald-500',
    features: [
      'Keyword Research',
      'Content Strategy',
      'Link Building',
      'Analytics & Reports'
    ],
    stats: {
      'Rankings': 'Top 10',
      'Traffic': '+200%',
      'ROI': '+150%'
    }
  },
  {
    title: 'Pay Per Click',
    description: 'PPC or pay-per-click campaign helps your business to make highly profitable revenue. PPC is one of the most uses advertising campaigns.',
    icon: '/icons/ppc.svg',
    href: '/services/ppc',
    color: 'from-blue-600 to-indigo-500',
    features: [
      'Campaign Strategy',
      'Ad Optimization',
      'Conversion Tracking',
      'ROI Analysis'
    ],
    stats: {
      'CTR': '3.2%',
      'Conversion': '+180%',
      'ROAS': '300%'
    }
  },
  {
    title: 'Video Marketing & YouTube',
    description: 'We create and help for your business to effective Video Marketing & YouTube SEO organic video views, engagement metrics.',
    icon: '/icons/video-marketing.svg',
    href: '/services/video-marketing',
    color: 'from-cyan-600 to-blue-500',
    features: [
      'Content Creation',
      'Channel Optimization',
      'SEO Strategy',
      'Audience Growth'
    ],
    stats: {
      'Views': '5M+',
      'Growth': '+250%',
      'Engagement': '12%'
    }
  },
  {
    title: 'E-commerce Services',
    description: 'Our team provides excellent service for E-commerce including design, search marketing, and conversion optimization.',
    icon: '/icons/ecommerce.svg',
    href: '/services/e-commerce',
    color: 'from-emerald-600 to-cyan-500',
    features: [
      'Store Setup',
      'Payment Integration',
      'Inventory Management',
      'Analytics Setup'
    ],
    stats: {
      'Sales': '+300%',
      'Conversion': '4.5%',
      'Revenue': '+200%'
    }
  },
  {
    title: 'Content Marketing',
    description: 'Content marketing is the best way to get to improve your website and provide a higher value of your web pages.',
    icon: '/icons/content-marketing.svg',
    href: '/services/content-marketing',
    color: 'from-blue-600 to-teal-500',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Social Media',
      'Email Marketing'
    ],
    stats: {
      'Reach': '1M+',
      'Engagement': '15%',
      'Growth': '+180%'
    }
  },
  {
    title: 'Graphics Designing',
    description: 'Our graphic designer creates HD animation & logos. We also design Excellent graphics, banners, brochures, business cards, animation etc.',
    icon: '/icons/graphics-design.svg',
    href: '/services/graphics-design',
    color: 'from-teal-600 to-blue-500',
    features: [
      'Logo Design',
      'Brand Identity',
      'Print Design',
      'Motion Graphics'
    ],
    stats: {
      'Projects': '500+',
      'Clients': '200+',
      'Rating': '4.9'
    }
  },
  {
    title: 'Social Media Marketing',
    description: 'Boost your brand presence and engagement across all major social media platforms with our comprehensive marketing strategies.',
    icon: '/icons/social-media.svg',
    href: '/services/social-media-marketing',
    color: 'from-purple-600 to-pink-500',
    features: [
      'Platform Strategy',
      'Content Calendar',
      'Community Management',
      'Analytics & Reports'
    ],
    stats: {
      'Followers': '1M+',
      'Engagement': '8.5%',
      'Growth': '+220%'
    }
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences with our expert UI/UX design services focused on user-centered design principles.',
    icon: '/icons/ui-ux.svg',
    href: '/services/ui-ux-design',
    color: 'from-pink-600 to-rose-500',
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing'
    ],
    stats: {
      'Success': '95%',
      'Users': '2M+',
      'Retention': '+75%'
    }
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions to help your business grow online and reach your target audience effectively.',
    icon: '/icons/digital-marketing.svg',
    href: '/services/digital-marketing',
    color: 'from-orange-600 to-amber-500',
    features: [
      'Strategy Development',
      'Multi-channel Marketing',
      'Lead Generation',
      'Performance Analysis'
    ],
    stats: {
      'ROI': '+250%',
      'Leads': '10K+',
      'Growth': '+200%'
    }
  }
];

const categories = ['All', 'Development', 'Marketing', 'Design', 'SEO', 'Content'];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From design to development, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-slate-900 p-1 rounded-2xl h-full">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl h-full">
                  {/* Service Icon */}
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color}`}>
                      <Image
                        src={
                          service.title === 'Website Design'
                            ? 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&fit=crop'
                            : service.title === 'Website Development'
                            ? 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop'
                            : service.title === 'App Development'
                            ? 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop'
                            : service.title === 'Search Engine Optimization'
                            ? 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?w=800&h=400&fit=crop'
                            : service.title === 'Pay Per Click'
                            ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
                            : service.title === 'Video Marketing & YouTube'
                            ? 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=400&fit=crop'
                            : service.title === 'Social Media Marketing'
                            ? 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=400&fit=crop'
                            : 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&h=400&fit=crop'
                        }
                        alt={service.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-slate-900/50 group-hover:from-slate-900/80 group-hover:to-slate-900/40 transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={64}
                        height={64}
                        className="transform group-hover:scale-110 transition-transform duration-300 z-10"
                      />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <FiCheck className="text-emerald-400 mr-2" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-900/50 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300">
                      {Object.entries(service.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-emerald-400 font-bold">{value}</div>
                          <div className="text-xs text-gray-500">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <Link href={service.href}>
                      <div className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-xl group/button hover:bg-emerald-500/20 transition-colors duration-300">
                        <span className="text-sm font-medium text-emerald-400">Learn More</span>
                        <FiArrowRight className="text-emerald-400 group-hover/button:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
