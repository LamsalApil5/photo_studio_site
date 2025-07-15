// src/data/videoLoader.js

// Import videos and thumbnails
const videoFiles = import.meta.glob('../assets/videos/**/*.mp4', { eager: true });
const thumbnailFiles = import.meta.glob('../assets/videos/**/*-thumbnail.jpg', { eager: true });

// Helper to extract metadata
const getMetadata = (filePath: string) => {
  const parts = filePath.split('/');
  const category = parts[parts.length - 2];
  const fileName = parts[parts.length - 1].replace('.mp4', '').replace('-thumbnail.jpg', '');
  return { category, fileName };
};

// Combine into structured array
export const videos = Object.entries(videoFiles).map(([path, mod]) => {
  const { category, fileName } = getMetadata(path);
  const videoUrl = (mod as { default: string }).default;

  // Find matching thumbnail
  const thumbnailEntry = Object.entries(thumbnailFiles).find(([thumbPath]) =>
    thumbPath.includes(`${category}/${fileName}-thumbnail.jpg`)
  );
  const thumbnailUrl = (thumbnailEntry?.[1] as { default: string } | undefined)?.default ?? '';

  return {
    id: `${category}-${fileName}`,
    title: fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    category,
    videoUrl,
    thumbnailUrl
  };
});
