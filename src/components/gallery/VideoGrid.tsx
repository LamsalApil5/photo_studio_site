import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export interface Video {
  id: string;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  category: string;
}

interface VideoGridProps {
  videos: Video[];
  categories: string[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const openVideo = (video: Video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden'; // prevent scroll when modal open
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto'; // restore scroll
  };

  return (
    <div className="w-full">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        <button
          aria-pressed={selectedCategory === 'all'}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            selectedCategory === 'all'
              ? 'bg-amber-700 text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={selectedCategory === category}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-amber-700 text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg shadow-md h-64 md:h-80 cursor-pointer transform transition-transform hover:scale-[1.02]"
            onClick={() => openVideo(video)}
          >
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Play size={24} className="text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-medium text-lg mb-1">{video.title}</h3>
              <span className="text-amber-300 text-sm">{video.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
            onClick={closeVideo}
            aria-label="Close video"
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl mb-3">{activeVideo.title}</h3>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                sandbox="allow-same-origin allow-scripts allow-presentation"
                allow="autoplay; clipboard-write; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
