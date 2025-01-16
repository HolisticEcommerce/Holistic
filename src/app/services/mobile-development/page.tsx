'use client';

export default function MobileDevelopment() {
  return (
    <main className="min-h-screen pt-24 bg-gradient-to-b from-gray-900 via-slate-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute h-[500px] w-[500px] -left-48 top-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse" />
          <div className="absolute h-[600px] w-[600px] -right-48 bottom-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-3xl opacity-20 mix-blend-overlay animate-pulse animation-delay-2000" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Mobile Development
              <span className="block text-2xl md:text-3xl mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 text-transparent bg-clip-text">
                Native and cross-platform mobile solutions
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Creating powerful mobile experiences that engage users and drive results across iOS and Android platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Native Development',
                description: 'Pure native apps for iOS and Android platforms',
                icon: '📱'
              },
              {
                title: 'Cross-Platform',
                description: 'Efficient solutions that work on multiple platforms',
                icon: '🔄'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful and intuitive user interfaces',
                icon: '🎨'
              },
              {
                title: 'App Store Support',
                description: 'Complete submission and maintenance support',
                icon: '🚀'
              },
              {
                title: 'Performance',
                description: 'Optimized for speed and efficiency',
                icon: '⚡'
              },
              {
                title: 'Analytics',
                description: 'Built-in analytics and user tracking',
                icon: '📊'
              }
            ].map((feature, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
