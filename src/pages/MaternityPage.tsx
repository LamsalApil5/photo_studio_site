import React from "react";
import { Link } from "react-router-dom";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { maternityPhotos } from "../data/maternityPhotos";
import seoData from "../data/seoData";
import Seo from "../components/Seo";

const MaternityPage: React.FC = () => {
  const categories = ["Studio", "Outdoor", "Home", "Couples"];
  const { title, description, keywords, image, url } = seoData.maternity;

  return (
    <>
      <Seo {...{ title, description, keywords, image, url }} />
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.pexels.com/photos/3662824/pexels-photo-3662824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Maternity background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Maternity Photography
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Celebrate the miracle of motherhood with elegant and artistic
              maternity portraits.
            </p>
          </div>
        </div>
      </section>

      {/* About Maternity Sessions */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.pexels.com/photos/8939990/pexels-photo-8939990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Maternity session"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                Capturing Your Journey to Motherhood
              </h2>
              <p className="text-neutral-700 mb-6">
                Our maternity sessions are designed to celebrate the beauty of
                pregnancy and the anticipation of new life. We create timeless
                portraits that capture this fleeting and magical time in your
                life.
              </p>
              <p className="text-neutral-700 mb-6">
                Whether you prefer studio portraits with elegant styling or
                natural outdoor settings, we'll work with you to create images
                that reflect your personality and the joy of expecting.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-amber-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Professional Styling Included
                    </h3>
                    <p className="text-neutral-700">
                      Access to our maternity wardrobe collection and styling
                      advice for your session.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-amber-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Partner & Family Included
                    </h3>
                    <p className="text-neutral-700">
                      We encourage including partners and siblings in your
                      maternity session for family portraits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-5 w-5 text-amber-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Best Timing
                    </h3>
                    <p className="text-neutral-700">
                      We recommend scheduling your session between 28-34 weeks
                      for the perfect baby bump.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maternity Gallery */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
              Maternity Gallery
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Browse through our collection of beautiful maternity photographs.
            </p>
          </div>
          <PhotoGrid photos={maternityPhotos} categories={categories} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Book Your Maternity Session?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your maternity photography session and
            preserve this beautiful chapter in your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/packages"
              className="px-6 py-3 bg-white text-amber-900 rounded-md font-medium transition-colors hover:bg-amber-100"
            >
              View Packages
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-white text-white rounded-md font-medium transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MaternityPage;
