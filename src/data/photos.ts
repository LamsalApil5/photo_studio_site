// src/data/photoLoader.js

// Import all jpg, jpeg, png files inside assets/images category folders eagerly
const imageFiles = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png}', { eager: true });

// Helper to extract category and file name from path
const getMetadata = (filePath: string) => {
  const parts = filePath.split('/');
  const category = parts[parts.length - 2];  // folder before the file name
  const fileName = parts[parts.length - 1];  // file name with extension
  return { category, fileName };
};

// Create photos array with metadata and URLs
export const photos = Object.entries(imageFiles).map(([path, mod]) => {
  const { category, fileName } = getMetadata(path);
  const url = (mod as { default: string }).default;

  return {
    id: `${category}-${fileName.replace(/\.[^/.]+$/, '')}`, // remove extension for id
    category,
    title: fileName.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    url
  };
});
