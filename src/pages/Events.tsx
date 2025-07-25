const Events = () => {
  const events = [
    {
      id: 1,
      title: "AI Workshop: Introduction to Machine Learning",
      date: "2024-02-15",
      time: "2:00 PM - 4:00 PM",
      location: "Computer Science Building, Room 101",
      description: "Learn the fundamentals of machine learning with hands-on exercises and real-world examples.",
      type: "Workshop",
      attendees: 45
    },
    {
      id: 2,
      title: "Hackathon: AI for Social Good",
      date: "2024-02-20",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Center",
      description: "24-hour hackathon focused on developing AI solutions for social impact and community benefit.",
      type: "Hackathon",
      attendees: 80
    },
    {
      id: 3,
      title: "Guest Lecture: Future of AI in Healthcare",
      date: "2024-02-25",
      time: "3:30 PM - 5:00 PM",
      location: "Auditorium A",
      description: "Dr. Sarah Johnson from TechCorp discusses the latest developments in AI-powered healthcare solutions.",
      type: "Lecture",
      attendees: 120
    },
    {
      id: 4,
      title: "Project Showcase",
      date: "2024-03-01",
      time: "1:00 PM - 4:00 PM",
      location: "Student Union",
      description: "Showcase of student AI projects with networking opportunities and industry connections.",
      type: "Showcase",
      attendees: 60
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Workshop':
        return 'bg-blue-100 text-blue-800';
      case 'Hackathon':
        return 'bg-green-100 text-green-800';
      case 'Lecture':
        return 'bg-purple-100 text-purple-800';
      case 'Showcase':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and networking opportunities. Stay updated with the latest 
            developments in artificial intelligence and connect with fellow enthusiasts.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="card hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                  {event.type}
                </span>
                <span className="text-sm text-gray-500">
                  {event.attendees} attendees
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {event.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
              </div>
              
              <button className="w-full btn-primary">
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Host an Event?
            </h3>
            <p className="text-gray-600 mb-6">
              Have an idea for an AI workshop, lecture, or event? We'd love to hear from you and help make it happen.
            </p>
            <button className="btn-primary">
              Propose an Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 