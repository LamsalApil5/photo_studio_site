// src/data/photoLoader.ts

// Import all images inside any folder under /images/
const imageFiles = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png}', { eager: true });

// Helper to extract category and file name from the file path
const getMetadata = (filePath: string) => {
  const parts = filePath.split('/');
  const imagesIndex = parts.findIndex(part => part === 'images');
  const category = parts[imagesIndex + 1]; // folder right after 'images'
  const fileName = parts[parts.length - 1];
  return { category, fileName };
};

// Create photos array
export const photos = Object.entries(imageFiles).map(([path, mod]) => {
  const { category, fileName } = getMetadata(path);
  const url = (mod as { default: string }).default;

  return {
    id: `${category}-${fileName.replace(/\.[^/.]+$/, '')}`,
    category,
    title: fileName
      .replace(/\.[^/.]+$/, '') // remove extension
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase()), // capitalize
    url
  };
});

// Create categories from folder names under /images/
export const categories = Array.from(new Set(photos.map(photo => photo.category))).sort();
