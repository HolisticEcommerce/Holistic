'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AppDevelopmentService() {
  const features = [
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile app development',
      icon: '📱'
    },
    {
      title: 'Web Apps',
      description: 'Progressive web applications with modern features',
      icon: '💻'
    },
    {
      title: 'UI/UX Design',
      description: 'Intuitive interfaces and seamless user experiences',
      icon: '🎨'
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development',
      icon: '⚙️'
    },
    {
      title: 'Testing & QA',
      description: 'Comprehensive testing and quality assurance',
      icon: '✅'
    },
    {
      title: 'Maintenance',
      description: 'Ongoing support and updates for your application',
      icon: '🛠️'
    }
  ];

  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute h-[500px] w-[500px] -left-48 top-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse" />
          <div className="absolute h-[600px] w-[600px] -right-48 bottom-0 bg-gradient-to-r from-teal-500/20 via-emerald-500/20 to-green-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-8">
              <Image
                src="/icons/app-development.svg"
                alt="App Development Services"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              App Development
              <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
                Transform Your Ideas Into Reality
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              We develop innovative mobile and web applications that help businesses 
              grow and succeed in the digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your App
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your App?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let&apos;s turn your app idea into a successful digital solution.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
