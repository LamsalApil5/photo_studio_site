import React, { useState } from 'react';
import { X } from 'lucide-react';
import PhotoCard from './PhotoCard';

interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface PhotoGridProps {
  photos: Photo[];
  categories: string[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (url: string) => {
    setLightboxImage(url);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            selectedCategory === 'all'
              ? 'bg-[#F6891E] text-white'
              : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
          }`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-[#F6891E] text-white'
                : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => openLightbox(photo.url)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged view" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGrid;