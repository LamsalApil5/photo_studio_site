import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3812944/pexels-photo-3812944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1920&w=1080"
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
          Capturing Life's<br />
          <span className="text-amber-400">Beautiful Moments</span>
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-xl mx-auto">
          Professional photography and videography services for all your special occasions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-amber-700 text-white rounded-md font-medium text-lg transition-colors hover:bg-amber-800 min-w-[160px]"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium text-lg transition-colors hover:bg-white/10 min-w-[160px]"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;