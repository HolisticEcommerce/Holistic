'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    description: 'A full-featured e-commerce solution with advanced filtering and search capabilities.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    link: '/portfolio/projects/e-commerce',
    stats: {
      users: '10K+',
      sales: '$2M+',
      rating: '4.9'
    }
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    description: 'Patient monitoring and healthcare management mobile application.',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
    link: '/portfolio/projects/healthcare-app',
    stats: {
      users: '50K+',
      downloads: '100K+',
      rating: '4.8'
    }
  },
  {
    title: 'Corporate Website Redesign',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Complete redesign of a corporate website focusing on user experience.',
    technologies: ['Figma', 'React', 'GSAP', 'Strapi'],
    link: '/portfolio/projects/corporate-redesign',
    stats: {
      conversion: '+150%',
      engagement: '+200%',
      satisfaction: '98%'
    }
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'Real-time analytics dashboard with AI-driven insights and predictions.',
    technologies: ['React', 'Python', 'TensorFlow', 'D3.js'],
    link: '/portfolio/projects/analytics-dashboard',
    stats: {
      dataProcessed: '1TB+',
      accuracy: '99.9%',
      predictions: '1M+'
    }
  },
  {
    title: 'Social Media Management Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop',
    description: 'Comprehensive social media management and analytics platform.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Redis'],
    link: '/portfolio/projects/social-media-platform',
    stats: {
      posts: '500K+',
      engagement: '+300%',
      clients: '1000+'
    }
  },
  {
    title: 'Educational Learning App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    description: 'Interactive mobile learning platform with gamification elements.',
    technologies: ['Flutter', 'Firebase', 'Unity', 'Node.js'],
    link: '/portfolio/projects/learning-app',
    stats: {
      students: '100K+',
      courses: '500+',
      completion: '92%'
    }
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'UI/UX Design'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <main className="min-h-screen bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-emerald-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 text-transparent bg-clip-text">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our latest projects and see how we transform ideas into powerful digital solutions.
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
                  ? 'bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-slate-900 p-1 rounded-2xl h-full">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl h-full">
                  {/* Project Image */}
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500">
                      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                      <Link
                        href={project.link}
                        className="text-white text-lg font-semibold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-emerald-500/20 px-4 py-2 rounded-lg backdrop-blur-sm border border-emerald-500/30 z-10"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        {project.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm">→</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-900/50 rounded-xl border border-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-emerald-400 font-bold">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 text-white border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Link */}
                  <Link
                    href={project.link}
                    className="block p-4 text-center text-blue-400 hover:text-blue-300 transition-colors duration-300 border-t border-slate-700/50"
                  >
                    View Portfolio →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-400 mb-8">
            Ready to start your project? Let&apos;s create something amazing together.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur transition duration-1000 group-hover:blur-xl" />
            <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full leading-none">
              Get in Touch
              <svg
                className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
