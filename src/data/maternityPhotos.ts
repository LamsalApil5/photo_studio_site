// src/data/maternityLoader.js

// Import jpg, jpeg, png files from assets/maternityImage/category folders eagerly
const maternityFiles = import.meta.glob('../assets/maternityImage/**/*.{jpg,jpeg,png}', { eager: true });

// Helper to extract category and filename
const getMetadata = (filePath: string) => {
  const parts = filePath.split('/');
  const category = parts[parts.length - 2]; // folder before the filename
  const fileName = parts[parts.length - 1]; // file name with extension
  return { category, fileName };
};

export const maternityPhotos = Object.entries(maternityFiles).map(([path, mod], index) => {
  const { category, fileName } = getMetadata(path);
  const url = (mod as { default: string }).default;

  return {
    id: `m${index + 1}`, // simple incremental id
    category,
    title: fileName.replace(/\.[^/.]+$/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    url
  };
});
