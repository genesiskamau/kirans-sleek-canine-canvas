import { useEffect } from "react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

interface ImageStructuredDataProps {
  images: ImageData[];
}

const ImageStructuredData = ({ images }: ImageStructuredDataProps) => {
  useEffect(() => {
    const imageGraphData = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "Kirangi Dogs Gallery - Premium Dog Breeding Kenya",
      "description": "Professional gallery showcasing our champion bloodline dogs, training excellence, and breeding achievements in Kenya",
      "publisher": {
        "@type": "Organization",
        "name": "Kirangi Dogs Kennel",
        "url": "https://kirangidogs.com"
      },
      "image": images.map(image => ({
        "@type": "ImageObject",
        "contentUrl": `https://kirangidogs.com${image.src}`,
        "url": `https://kirangidogs.com${image.src}`,
        "name": `${image.title} - Kenya Dog Breeding`,
        "description": `${image.description} - Professional dog breeding and training services in Kenya`,
        "caption": `${image.alt} - Kirangi Dogs Kenya`,
        "keywords": `${image.category}, dog breeding Kenya, German Shepherd Kenya, Black Russian Terrier Kenya, English Springer Spaniel Kenya, dog training Kenya, K9 services Kenya`,
        "author": {
          "@type": "Organization",
          "name": "Kirangi Dogs Kennel"
        },
        "copyrightHolder": {
          "@type": "Organization", 
          "name": "Kirangi Dogs Kennel"
        },
        "uploadDate": "2024-01-01",
        "contentLocation": {
          "@type": "Place",
          "name": "Kenya",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KE",
            "addressLocality": "Nairobi",
            "addressRegion": "Kenya"
          }
        }
      }))
    };

    // Remove existing gallery structured data
    const existingScript = document.querySelector('script[data-gallery-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-gallery-schema', 'true');
    script.textContent = JSON.stringify(imageGraphData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-gallery-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [images]);

  return null;
};

export default ImageStructuredData;