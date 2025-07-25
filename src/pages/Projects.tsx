const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot Assistant",
      description: "A conversational AI chatbot built with natural language processing for student support.",
      technologies: ["Python", "TensorFlow", "NLP", "React"],
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=AI+Chatbot",
      status: "Completed"
    },
    {
      id: 2,
      title: "Computer Vision System",
      description: "Real-time object detection and recognition system using deep learning.",
      technologies: ["Python", "OpenCV", "YOLO", "PyTorch"],
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=Computer+Vision",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Predictive Analytics Dashboard",
      description: "Data visualization and predictive modeling for academic performance analysis.",
      technologies: ["Python", "Pandas", "Scikit-learn", "D3.js"],
      image: "https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Analytics",
      status: "Completed"
    },
    {
      id: 4,
      title: "Autonomous Robot Navigation",
      description: "AI-powered robot navigation system using reinforcement learning.",
      technologies: ["Python", "ROS", "TensorFlow", "Gazebo"],
      image: "https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Robot+AI",
      status: "Planning"
    },
    {
      id: 5,
      title: "Sentiment Analysis Tool",
      description: "Social media sentiment analysis using machine learning algorithms.",
      technologies: ["Python", "NLTK", "BERT", "Flask"],
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Sentiment+AI",
      status: "Completed"
    },
    {
      id: 6,
      title: "Recommendation System",
      description: "Personalized content recommendation engine for educational resources.",
      technologies: ["Python", "Collaborative Filtering", "Django", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Recommendations",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the innovative AI projects our members have developed. From machine learning to computer vision, 
            discover cutting-edge solutions that push the boundaries of artificial intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className="w-full btn-primary">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community and bring your AI project ideas to life. We provide resources, mentorship, and collaboration opportunities.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 