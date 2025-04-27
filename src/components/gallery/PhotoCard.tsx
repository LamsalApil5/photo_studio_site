import React from 'react';

interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
}

interface PhotoCardProps {
  photo: Photo;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-md h-64 md:h-80 transform transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={photo.url} 
        alt={photo.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg mb-1">{photo.title}</h3>
        <span className="text-amber-300 text-sm">{photo.category}</span>
      </div>
    </div>
  );
};

export default PhotoCard;