import { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Director General",
      department: "International Affairs",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bio: "Leading IOAI's global mission with 20+ years of experience in international AI policy and governance.",
      social: { linkedin: "#", twitter: "#", email: "elena.rodriguez@ioai.org" }
    },
    {
      name: "Dr. James Chen",
      role: "Chief Research Officer",
      department: "Global Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Overseeing international AI research initiatives and fostering global scientific collaboration.",
      social: { linkedin: "#", twitter: "#", email: "james.chen@ioai.org" }
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Head of Ethics & Policy",
      department: "AI Ethics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bio: "Developing international AI ethics frameworks and responsible AI governance policies.",
      social: { linkedin: "#", twitter: "#", email: "sarah.johnson@ioai.org" }
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Director of International Relations",
      department: "Global Partnerships",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Building strategic partnerships with governments, institutions, and organizations worldwide.",
      social: { linkedin: "#", twitter: "#", email: "ahmed.hassan@ioai.org" }
    }
  ];

  const milestones = [
    {
      year: "1999",
      title: "IOAI Founded",
      description: "International Organization for Artificial Intelligence established with 15 founding member countries.",
      icon: "🌍"
    },
    {
      year: "2005",
      title: "First Global AI Summit",
      description: "Hosted the inaugural Global AI Summit in Geneva, bringing together world leaders and AI experts.",
      icon: "🤝"
    },
    {
      year: "2010",
      title: "AI Ethics Framework",
      description: "Published the first international AI ethics guidelines adopted by 50+ countries.",
      icon: "⚖️"
    },
    {
      year: "2015",
      title: "Global Research Network",
      description: "Established research partnerships with 200+ institutions across 80 countries.",
      icon: "🔬"
    },
    {
      year: "2020",
      title: "UN Partnership",
      description: "Formed official partnership with the United Nations for AI and sustainable development.",
      icon: "🇺🇳"
    },
    {
      year: "2024",
      title: "Global AI Initiative",
      description: "Launched comprehensive global AI initiative with 100+ member countries and 1000+ experts.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="hero-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About IOAI
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                The International Organization for Artificial Intelligence (IOAI) is a global institution dedicated to 
                advancing AI technology for the benefit of humanity through international cooperation, research, and policy development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Global Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                IOAI serves as the premier international platform for AI collaboration, bringing together researchers, 
                policymakers, industry leaders, and civil society to address the most pressing challenges and opportunities 
                in artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work across borders to develop ethical AI frameworks, advance scientific research, and ensure that 
                AI technology benefits all of humanity while minimizing potential risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  <span className="flex items-center">
                    Our Values
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="btn-secondary">
                  <span className="flex items-center">
                    Strategic Plan
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Principles</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Cooperation</h4>
                      <p className="text-gray-600 text-sm">Fostering international collaboration and knowledge sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Ethical Development</h4>
                      <p className="text-gray-600 text-sm">Ensuring AI development aligns with human values and rights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inclusive Access</h4>
                      <p className="text-gray-600 text-sm">Democratizing AI benefits across all nations and communities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sustainable Impact</h4>
                      <p className="text-gray-600 text-sm">Addressing global challenges through AI innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the international team of experts leading IOAI's mission to advance artificial intelligence 
              for the benefit of humanity worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="card text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-500 text-sm mb-4">{member.department}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-gray-100 hover:bg-primary-600 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From our founding to becoming the world's leading international AI organization, 
              discover the key milestones in IOAI's global impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className={`card ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-4xl mb-4">{milestone.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-primary-600 font-semibold mb-3">{milestone.year}</p>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Global Mission
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Be part of the international effort to advance artificial intelligence for the benefit of humanity. 
            Together, we can shape the future of AI globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <span className="flex items-center">
                Become a Member
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 