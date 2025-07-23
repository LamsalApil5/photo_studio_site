import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PhotographySession from "../assets/Home/024A5859.jpg";
// Import sample data
import { photos } from "../data/photos";
import PhotoGrid from "../components/gallery/PhotoGrid";
import seoData from "../data/seoData";
import Seo from "../components/Seo";

const featuredPhotos = photos.slice(0, 6);
const categories = ["Wedding", "Portrait", "Family", "Event", "Commercial"];
const { title, description, keywords, image, url } = seoData.home;

const HomePage: React.FC = () => {
  return (
    <>
      <Seo {...{ title, description, keywords, image, url }} />
      <Hero />
      <Services />
      {/* Featured Work */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">
              Featured Work
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Browse through our portfolio of captivating images that tell
              unique stories.
            </p>
          </div>

          <PhotoGrid photos={featuredPhotos} categories={categories} />

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-[#F6891E] text-white rounded-md font-medium transition-colors hover:bg-amber-800"
            >
              View Full Portfolio
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r bg-[#F6891E] rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Ready to Capture Your Special Moments?
                </h2>
                <p className="text-amber-100 mb-8 text-lg">
                  Book a session today and let us create beautiful memories that
                  will last a lifetime.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/packages"
                    className="text-center px-6 py-3 bg-white text-amber-900 rounded-md font-medium transition-colors hover:bg-amber-100"
                  >
                    View Packages
                  </Link>
                  <Link
                    to="/contact"
                    className="text-center px-6 py-3 border-2 border-white text-white rounded-md font-medium transition-colors hover:bg-white/10"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img
                  src={PhotographySession}
                  alt="Photography session"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
