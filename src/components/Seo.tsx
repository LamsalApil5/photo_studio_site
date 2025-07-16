// src/components/Seo.tsx

import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
}

const Seo = ({ title, description, keywords, image, url }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content="Moti Creation" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={url} />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta property="og:site_name" content="Moti Creation" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:url" content={url} />

    <html lang="en" />
  </Helmet>
);

export default Seo;
