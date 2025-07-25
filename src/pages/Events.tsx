import { useState, useEffect } from 'react';

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = [
    {
      id: 1,
      title: "IOAI Global AI Summit 2024",
      date: "2024-06-15",
      time: "9:00 AM - 6:00 PM",
      location: "Geneva, Switzerland",
      description: "Annual international summit bringing together world leaders, researchers, and policymakers to discuss the future of AI and global cooperation.",
      type: "Summit",
      attendees: 500,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "AI Ethics International Conference",
      date: "2024-07-20",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      description: "Global conference on AI ethics, responsible AI development, and international policy frameworks.",
      type: "Conference",
      attendees: 1200,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Climate AI Innovation Workshop",
      date: "2024-08-10",
      time: "10:00 AM - 4:00 PM",
      location: "Tokyo, Japan",
      description: "International workshop focused on AI solutions for climate change and environmental sustainability.",
      type: "Workshop",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Global AI Education Symposium",
      date: "2024-09-05",
      time: "1:00 PM - 6:00 PM",
      location: "New York, USA",
      description: "International symposium on AI education, curriculum development, and global learning initiatives.",
      type: "Symposium",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Healthcare AI International Forum",
      date: "2024-10-12",
      time: "9:00 AM - 5:00 PM",
      location: "London, UK",
      description: "Global forum on AI applications in healthcare, medical research, and international health cooperation.",
      type: "Forum",
      attendees: 400,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "AI Security & Governance Summit",
      date: "2024-11-20",
      time: "8:00 AM - 7:00 PM",
      location: "Singapore",
      description: "International summit on AI security, governance frameworks, and international cooperation on AI safety.",
      type: "Summit",
      attendees: 350,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Summit':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white';
      case 'Conference':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white';
      case 'Workshop':
        return 'bg-gradient-to-r from-green-500 to-green-600 text-white';
      case 'Symposium':
        return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white';
      case 'Forum':
        return 'bg-gradient-to-r from-pink-500 to-pink-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const isUpcoming = (date: string) => {
    return new Date(date) > new Date();
  };

  const filteredEvents = selectedType === 'all' 
    ? events 
    : events.filter(event => event.type === selectedType);

  const typeFilters = [
    { value: 'all', label: 'All Events', count: events.length },
    { value: 'Summit', label: 'Summits', count: events.filter(e => e.type === 'Summit').length },
    { value: 'Conference', label: 'Conferences', count: events.filter(e => e.type === 'Conference').length },
    { value: 'Workshop', label: 'Workshops', count: events.filter(e => e.type === 'Workshop').length },
    { value: 'Symposium', label: 'Symposiums', count: events.filter(e => e.type === 'Symposium').length },
    { value: 'Forum', label: 'Forums', count: events.filter(e => e.type === 'Forum').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Events & Conferences
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join IOAI's international events, conferences, and summits that bring together the global AI community 
              to advance technology for humanity's benefit.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {typeFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedType(filter.value)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedType === filter.value
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-primary-600 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id} 
              className="card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                  {event.type}
                </span>
                {isUpcoming(event.date) && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white">
                    Upcoming
                  </span>
                )}
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {event.description}
              </p>
              
              <button className="w-full btn-primary group-hover:shadow-lg">
                <span className="flex items-center justify-center">
                  Register Now
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
              Host an IOAI Event
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Interested in hosting an IOAI event in your region? Join our global network of event organizers 
              and help advance AI collaboration worldwide.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              <span className="flex items-center">
                Become an Organizer
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

export default Events; 