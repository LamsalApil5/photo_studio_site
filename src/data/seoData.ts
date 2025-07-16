// src/data/seoData.ts

const brandName = "Moti Creation";
const baseUrl = "https://www.moticreation.com"; // Change to your real domain

const seoData = {
  home: {
    title: `Home | ${brandName}`,
    description: "Capture beautiful moments with Moti Creation's professional photography services.",
    keywords: "Moti Creation, photography, photo studio, wedding photographer, candid photography",
    image: `${baseUrl}/images/seo/home.jpg`,
    url: `${baseUrl}/`,
  },
  portfolio: {
    title: `Portfolio | ${brandName}`,
    description: "Explore our creative portfolio of photoshoots and client stories at Moti Creation.",
    keywords: "photography portfolio, Moti Creation work, best photos, wedding projects",
    image: `${baseUrl}/images/seo/portfolio.jpg`,
    url: `${baseUrl}/portfolio`,
  },
  videoGallery: {
    title: `Video Gallery | ${brandName}`,
    description: "Watch stunning cinematic videos and storytelling clips from Moti Creation.",
    keywords: "video gallery, wedding videos, cinematography, photo motion",
    image: `${baseUrl}/images/seo/video.jpg`,
    url: `${baseUrl}/video-gallery`,
  },
  maternity: {
    title: `Maternity Photography | ${brandName}`,
    description: "Cherish your motherhood journey with elegant maternity photography by Moti Creation.",
    keywords: "maternity shoot, baby bump photography, motherhood, pregnancy photography",
    image: `${baseUrl}/images/seo/maternity.jpg`,
    url: `${baseUrl}/maternity`,
  },
  packages: {
    title: `Photography Packages | ${brandName}`,
    description: "Affordable and customizable packages for weddings, maternity, events and more.",
    keywords: "photography packages, affordable photographer, book photoshoot, pricing",
    image: `${baseUrl}/images/seo/packages.jpg`,
    url: `${baseUrl}/packages`,
  },
  contact: {
    title: `Contact Us | ${brandName}`,
    description: "Get in touch with Moti Creation for bookings, questions, and availability.",
    keywords: "contact photographer, photography studio, Moti Creation contact",
    image: `${baseUrl}/images/seo/contact.jpg`,
    url: `${baseUrl}/contact`,
  },
  notFound: {
    title: `404 - Page Not Found | ${brandName}`,
    description: "The page you are looking for doesn’t exist. Explore more at Moti Creation.",
    keywords: "404, not found, missing page, Moti Creation",
    image: `${baseUrl}/images/seo/404.jpg`,
    url: `${baseUrl}/*`,
  },
};

export default seoData;
