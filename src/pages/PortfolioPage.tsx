import React from "react";
import PhotoGrid from "../components/gallery/PhotoGrid";
import { photos, categories } from "../data/photos";
import seoData from "../data/seoData";
import Seo from "../components/Seo";

const PortfolioPage: React.FC = () => {
  const { title, description, keywords, image, url } = seoData.portfolio;

  return (
    <>
      <Seo {...{ title, description, keywords, image, url }} />
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/2147486/pexels-photo-2147486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Portfolio background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Browse through our collection of captivating photographs from
              various projects and events.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <PhotoGrid photos={photos} categories={categories} />
        </div>
      </section>

      {/* Info Section - Simplified English for Nepali Audience */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex md:items-center md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                Our Photography Style
              </h2>
              <p className="text-neutral-700 mb-6">
                We believe every moment has its own story. Our style mixes
                technical skills with creativity to take beautiful photos that
                show real emotions and special memories.
              </p>
              <p className="text-neutral-700 mb-6">
                From planning to the final photo delivery, we work closely with
                our clients. We listen to your ideas and go beyond your
                expectations. We focus on every small detail so that each photo
                truly reflects your moment.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm">
                  Natural Light
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm">
                  Studio Photography
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm">
                  Creative Direction
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm">
                  Photo Editing
                </span>
                <span className="bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full text-sm">
                  Color Grading
                </span>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3812979/pexels-photo-3812979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Photographer at work"
                className="w-full h-full object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Camera equipment"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
