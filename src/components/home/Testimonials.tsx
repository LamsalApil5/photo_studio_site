import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily & David',
    role: 'Wedding Clients',
    content:
      'Working with LensLife for our wedding was the best decision we made! They captured every precious moment beautifully, and the photos exceeded all our expectations. The team was professional, friendly, and made us feel completely at ease.',
    avatar: 'https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Maternity Client',
    content:
      'My maternity photoshoot was absolutely magical! The photographer made me feel beautiful and comfortable throughout the session. The photos captured this special time in my life perfectly, and I will treasure them forever.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Thompson',
    role: 'Corporate Client',
    content:
      'LensLife delivered exceptional corporate photography for our annual report and website. Their attention to detail, professionalism, and creative eye resulted in images that perfectly represent our brand. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Testimonials</h2>
          <p className="text-neutral-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutral-800 rounded-lg p-8 relative">
                    <div className="flex flex-col md:flex-row md:items-center mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mx-auto md:mx-0 mb-4 md:mb-0 md:mr-4"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-amber-400">{testimonial.role}</p>
                        <div className="flex items-center mt-1 justify-center md:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-neutral-300 text-lg italic">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-amber-700 text-white p-2 rounded-full shadow-lg hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-amber-700 text-white p-2 rounded-full shadow-lg hover:bg-amber-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-amber-500' : 'bg-neutral-700 hover:bg-neutral-600'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;