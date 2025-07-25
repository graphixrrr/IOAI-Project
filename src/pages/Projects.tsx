import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Global AI Ethics Framework",
      description: "Developing comprehensive ethical guidelines for AI development and deployment across international borders.",
      technologies: ["AI Ethics", "Policy Development", "International Standards", "Research"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      status: "Completed",
      category: "AI Ethics"
    },
    {
      id: 2,
      title: "Climate Change AI Initiative",
      description: "AI-powered solutions for climate modeling, renewable energy optimization, and environmental protection.",
      technologies: ["Machine Learning", "Climate Science", "Data Analytics", "Sustainability"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop&crop=center",
      status: "In Progress",
      category: "Climate AI"
    },
    {
      id: 3,
      title: "Global Healthcare AI Platform",
      description: "International collaboration platform for AI-driven healthcare solutions and medical research.",
      technologies: ["Healthcare AI", "Medical Research", "International Collaboration", "Data Science"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      status: "Completed",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "AI for Education Initiative",
      description: "Global AI education programs and platforms to democratize access to AI knowledge worldwide.",
      technologies: ["Education Technology", "AI Learning", "Global Outreach", "Digital Platforms"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center",
      status: "Planning",
      category: "Education"
    },
    {
      id: 5,
      title: "International AI Security Protocol",
      description: "Developing security standards and protocols for AI systems across international borders.",
      technologies: ["AI Security", "Cybersecurity", "International Standards", "Risk Assessment"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
      status: "Completed",
      category: "Security"
    },
    {
      id: 6,
      title: "Sustainable Development AI Hub",
      description: "AI solutions for achieving UN Sustainable Development Goals through international collaboration.",
      technologies: ["Sustainable Development", "UN SDGs", "International Cooperation", "AI Solutions"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      status: "In Progress",
      category: "Sustainability"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'In Progress':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Planning':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const filteredProjects = selectedStatus === 'all' 
    ? projects 
    : projects.filter(project => project.status === selectedStatus);

  const statusFilters = [
    { value: 'all', label: 'All Research', count: projects.length },
    { value: 'Completed', label: 'Completed', count: projects.filter(p => p.status === 'Completed').length },
    { value: 'In Progress', label: 'In Progress', count: projects.filter(p => p.status === 'In Progress').length },
    { value: 'Planning', label: 'Planning', count: projects.filter(p => p.status === 'Planning').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Research Initiatives
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore IOAI's cutting-edge research projects and international initiatives that are advancing 
              artificial intelligence for the benefit of humanity worldwide.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {statusFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedStatus(filter.value)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedStatus === filter.value
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-primary-600 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full btn-primary group-hover:shadow-lg">
                <span className="flex items-center justify-center">
                  View Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="card max-w-3xl mx-auto bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Contribute to Global AI Research
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join IOAI's international research community and contribute to groundbreaking AI initiatives 
              that address global challenges and benefit humanity.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              <span className="flex items-center">
                Join Research Team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 