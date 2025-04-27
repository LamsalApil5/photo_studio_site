import React from 'react';
import { Camera, Video, Users, HeartPulse, Building2, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Camera className="h-8 w-8 text-amber-700" />,
    title: 'Wedding Photography',
    description: 'Capture the magic of your special day with our professional wedding photography services.',
    path: '/portfolio',
  },
  {
    icon: <Video className="h-8 w-8 text-amber-700" />,
    title: 'Videography',
    description: 'Professional video production for weddings, events, commercials, and creative projects.',
    path: '/video-gallery',
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-amber-700" />,
    title: 'Maternity Sessions',
    description: 'Beautiful maternity portraits to celebrate the miracle of new life.',
    path: '/maternity',
  },
  {
    icon: <Users className="h-8 w-8 text-amber-700" />,
    title: 'Family Portraits',
    description: 'Timeless family portraits that capture the unique bond between loved ones.',
    path: '/portfolio',
  },
  {
    icon: <Building2 className="h-8 w-8 text-amber-700" />,
    title: 'Commercial Photography',
    description: 'High-quality commercial photography for businesses, products, and marketing needs.',
    path: '/portfolio',
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-amber-700" />,
    title: 'Event Coverage',
    description: 'Comprehensive coverage of corporate events, parties, and special occasions.',
    path: '/portfolio',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">Our Services</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We offer a wide range of photography and videography services to meet all your visual storytelling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-neutral-600 mb-4">{service.description}</p>
              <Link
                to={service.path}
                className="text-amber-700 font-medium hover:text-amber-800 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;