import React from 'react';
import PricingCard from '../components/packages/PricingCard';
import { Link } from 'react-router-dom';
import { packageData } from '../data/packages';
import { faqData } from '../data/faq';

const PackagesPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Packages background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Packages & Pricing</h1>
            <p className="text-xl text-neutral-300 mb-8">
              Explore our range of photography and videography packages designed to meet your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Photography Packages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Photography Packages</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Choose from our selection of photography packages, each designed to provide exceptional value and stunning results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageData.photography.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Videography Packages */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Videography Packages</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our videography packages offer comprehensive coverage to capture your story in motion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageData.videography.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Additional Services</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Enhance your photography or videography package with these popular add-ons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageData.addons.map((addon) => (
              <div key={addon.id} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{addon.name}</h3>
                <p className="text-amber-700 font-bold mb-3">${addon.price}</p>
                <p className="text-neutral-700 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Find answers to common questions about our services, booking process, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqData.map((faq) => (
                <details 
                  key={faq.id} 
                  className="group bg-white p-6 rounded-lg shadow-sm border border-neutral-200 open:shadow-md transition-all duration-300"
                >
                  <summary className="list-none flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg font-semibold text-neutral-900">{faq.question}</h3>
                    <span className="ml-4 flex-shrink-0 text-neutral-500 group-open:rotate-180 transition-transform duration-300">
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <path 
                          stroke="currentColor" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-neutral-700">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Book Your Session?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific needs and schedule your photography or videography session.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-amber-900 rounded-md font-medium text-lg transition-colors hover:bg-amber-100"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default PackagesPage;