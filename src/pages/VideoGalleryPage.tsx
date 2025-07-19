import React, { useEffect, useState } from "react";
import VideoGrid, { Video } from "../components/gallery/VideoGrid";
import seoData from "../data/seoData";
import Seo from "../components/Seo";
import { videoData } from "../data/videos";

const VideoGalleryPage: React.FC = () => {
  const categories = ["Wedding", "Event", "Commercial", "Travel"];
  const { title, description, keywords, image, url } = seoData.videoGallery;

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async fetch
    const fetchVideos = async () => {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 500)); // simulate delay
      setVideos(videoData);
      setLoading(false);
    };

    fetchVideos();
  }, []);

  return (
    <>
      <Seo {...{ title, description, keywords, image, url }} />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg"
            alt="Video gallery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Video Gallery
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Cinematic stories that capture movement, emotion, and special moments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center">Loading videos...</p>
          ) : (
            <VideoGrid videos={videos} categories={categories} />
          )}
        </div>
      </section>
    </>
  );
};

export default VideoGalleryPage;
