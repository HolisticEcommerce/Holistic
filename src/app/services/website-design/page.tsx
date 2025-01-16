'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function WebsiteDesignService() {
  const features = [
    {
      title: 'Custom Design',
      description: 'Unique website designs tailored to your brand and business goals',
      icon: '🎨'
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-friendly layouts that work perfectly on all devices',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and smooth user experiences',
      icon: '✨'
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes to visualize the final product',
      icon: '🔄'
    },
    {
      title: 'Brand Integration',
      description: 'Seamless integration of your brand elements and guidelines',
      icon: '🎯'
    },
    {
      title: 'Design Systems',
      description: 'Comprehensive design systems for consistent brand presence',
      icon: '📐'
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute h-[500px] w-[500px] -left-48 top-0 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse" />
          <div className="absolute h-[600px] w-[600px] -right-48 bottom-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-8">
              <Image
                src="/icons/website-design.svg"
                alt="Website Design Services"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Website Design
              <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 text-transparent bg-clip-text">
                Create Your Digital Presence
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We create beautiful, responsive websites that engage your audience 
              and drive results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col">
                  <span className="text-3xl mb-4">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-violet-500/10 backdrop-blur-sm border border-white/10" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Design Your Dream Website?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s create a stunning website that perfectly represents your brand.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Design Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
