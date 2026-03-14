import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Swissôtel Tashkent - Luxury 5-Star Hotel", 
  description = "Experience Swiss luxury in the heart of Tashkent. 5-star accommodations, fusion dining, and world-class spa facilities.",
  image = "https://picsum.photos/seed/hotel-og/1200/630",
  url = "https://swissotel-tashkent.com"
}) => {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Swissôtel Tashkent",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shakhrisabz Passage 4",
      "addressLocality": "Tashkent",
      "postalCode": "100060",
      "addressCountry": "UZ"
    },
    "telephone": "+998 55 515 23 32",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "image": [image]
  };
  

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(hotelSchema)}
      </script>
    </Helmet>
  );
};

// Add this to your SEO.tsx or create a separate component
export const submitSitemap = () => {
  const sitemapUrl = 'https://swissotel-tashkent.com/sitemap.xml';
  
  // Submit to Google
  fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
  
  // Submit to Bing
  fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
};


export default SEO;
