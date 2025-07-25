import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface HomeProps {
  onNavigate?: (section: string) => void;
}

const Home: React.FC<HomeProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Unique Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400/30 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-cyan-400/30 animate-spin"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-pink-400/30 rounded-full animate-ping"></div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-white/5"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Mouse-following light effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Unique animated logo */}
          <div className="mb-8 relative">
            <div className="inline-block relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-white font-bold text-4xl">IO</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main heading with unique typography */}
          <div className={`transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                IOAI
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              International Organization for
            </div>
            <div className="text-3xl md:text-4xl text-white mb-8 font-bold">
              Artificial Intelligence
            </div>
            
            {/* Unique subtitle with animated dots */}
            <div className="flex items-center justify-center space-x-2 mb-12">
              <span className="text-lg text-gray-400">Advancing AI for Humanity</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Unique CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link to="/projects" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-2xl">
                <span className="flex items-center">
                  Explore Research
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            
            <button className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <button className="relative bg-gradient-to-r from-pink-600 to-red-600 text-white font-bold py-4 px-8 rounded-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-2xl">
                <span className="flex items-center">
                  Join Our Mission
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
              </button>
            </button>
          </div>

          {/* Unique stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Countries", color: "from-purple-400 to-purple-600" },
              { number: "200+", label: "Projects", color: "from-blue-400 to-blue-600" },
              { number: "1000+", label: "Experts", color: "from-cyan-400 to-cyan-600" },
              { number: "25", label: "Years", color: "from-pink-400 to-pink-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="relative z-10 py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Global Mission
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              IOAI brings together researchers, policymakers, and industry leaders from around the world 
              to advance AI technology for the benefit of all humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔬",
                title: "Research & Innovation",
                description: "Leading cutting-edge AI research initiatives and fostering breakthrough innovations that address global challenges.",
                gradient: "from-purple-500 to-purple-700"
              },
              {
                icon: "🌍",
                title: "Global Collaboration",
                description: "Building international partnerships and fostering collaboration between nations, institutions, and organizations worldwide.",
                gradient: "from-blue-500 to-blue-700"
              },
              {
                icon: "📚",
                title: "Education & Policy",
                description: "Developing AI education programs and shaping policies that ensure responsible and ethical AI development globally.",
                gradient: "from-cyan-500 to-cyan-700"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-3xl p-12 border border-white/20">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Join the Global AI Revolution
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Be part of the international effort to advance artificial intelligence for the benefit of humanity. 
                Together, we can shape the future of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contact" className="group">
                  <div className="absolute inset-0 bg-white rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <button className="relative bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-2xl">
                    <span className="flex items-center">
                      Get Involved
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                <Link to="/about" className="group">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 