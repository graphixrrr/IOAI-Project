const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Faculty Advisor",
      department: "Computer Science",
      image: "https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=SC",
      bio: "Leading researcher in machine learning and AI ethics with 15+ years of experience."
    },
    {
      name: "Alex Rodriguez",
      role: "President",
      department: "Computer Engineering",
      image: "https://via.placeholder.com/200x200/10B981/FFFFFF?text=AR",
      bio: "Passionate about democratizing AI education and fostering innovation in the community."
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      department: "Data Science",
      image: "https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=PP",
      bio: "Specializes in computer vision and deep learning applications for social impact."
    },
    {
      name: "Marcus Johnson",
      role: "Treasurer",
      department: "Software Engineering",
      image: "https://via.placeholder.com/200x200/EF4444/FFFFFF?text=MJ",
      bio: "Expert in full-stack development and AI system architecture."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Club Founded",
      description: "AI Club was established with 25 founding members and a vision to democratize AI education."
    },
    {
      year: "2020",
      title: "First Hackathon",
      description: "Successfully organized our first AI hackathon with 100+ participants and industry sponsors."
    },
    {
      year: "2021",
      title: "Research Partnership",
      description: "Formed partnerships with leading AI research institutions and tech companies."
    },
    {
      year: "2022",
      title: "International Recognition",
      description: "Our projects won awards at international AI competitions and conferences."
    },
    {
      year: "2023",
      title: "Community Expansion",
      description: "Reached 150+ active members and launched mentorship programs for high school students."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About AI Club
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a community of passionate students, researchers, and professionals dedicated to advancing 
              artificial intelligence through education, innovation, and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize artificial intelligence education and foster a community where students can learn, 
                experiment, and innovate with cutting-edge AI technologies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that AI has the potential to solve some of the world's most pressing challenges, 
                and we're committed to empowering the next generation of AI leaders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-gray-600">Active Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Pushing boundaries and exploring new possibilities in AI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">Working together to achieve greater impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600">Making AI accessible to everyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who guide our community and drive our mission forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-500 mb-3">{member.department}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a thriving community of AI enthusiasts.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 