import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight, Award, Users, Dog } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      src: "/lovable-uploads/0d1e1051-e6d3-42c1-9102-f592d9acc724.png",
      alt: "German Shepherd Adult",
      category: "breeding",
      title: "Champion German Shepherd",
      description: "Adult German Shepherd from our breeding program"
    },
    {
      id: 2,
      src: "/lovable-uploads/0d2a9967-a9a7-4700-8573-2df3d6445a0f.png",
      alt: "German Shepherd Adult Standing",
      category: "breeding",
      title: "Show Quality German Shepherd",
      description: "Beautiful example of our German Shepherd bloodline"
    },
    {
      id: 3,
      src: "/lovable-uploads/d2d80c55-ee34-4615-be86-9ceea921ae80.png",
      alt: "Black Russian Terrier Adult",
      category: "breeding",
      title: "Champion Black Russian Terrier",
      description: "Magnificent Black Russian Terrier from our kennel"
    },
    {
      id: 4,
      src: "/lovable-uploads/f8d5f6f0-572c-44ea-930b-cc5738778cef.png",
      alt: "Training Competition",
      category: "competitions",
      title: "Dog Training Competition",
      description: "Our dogs excelling in competitive training events"
    },
    {
      id: 5,
      src: "/lovable-uploads/b5b5cffe-0477-45d1-9d18-128381fbf7f8.png",
      alt: "Award Ceremony",
      category: "competitions",
      title: "Nanyuki Dog Show Winners",
      description: "Celebrating our achievements at the Nanyuki Dog Show"
    },
    {
      id: 6,
      src: "/lovable-uploads/114f791e-cafd-43fb-9ba1-13f201fc641d.png",
      alt: "Award Winners",
      category: "competitions",
      title: "Competition Champions",
      description: "Our team celebrating another successful competition"
    },
    {
      id: 7,
      src: "/lovable-uploads/76d917e7-6e5a-47de-adc5-d6da990f5df4.png",
      alt: "German Shepherd Puppy",
      category: "puppies",
      title: "German Shepherd Puppy",
      description: "Adorable German Shepherd puppy ready for loving home"
    },
    {
      id: 8,
      src: "/lovable-uploads/321ee2e8-4ea3-4b01-ac2b-941b4a91b537.png",
      alt: "German Shepherd Puppy Portrait",
      category: "puppies",
      title: "Puppy Portrait",
      description: "Beautiful German Shepherd puppy from our latest litter"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", icon: Dog },
    { id: "breeding", label: "Our Dogs", icon: Award },
    { id: "puppies", label: "Puppies", icon: Users },
    { id: "competitions", label: "Competitions", icon: Award }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex].src);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our collection of champion dogs, adorable puppies, and competition achievements. 
            Each photo tells a story of excellence and dedication to breeding the finest dogs in Kenya.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="group transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((item, index) => (
            <Card 
              key={item.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card"
              onClick={() => openLightbox(item.src, index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="mb-2">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-white/80 text-xs">{item.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="w-4 h-4 text-white" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 border-white/20 hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </Button>

              <img 
                src={selectedImage} 
                alt="Gallery image"
                className="max-w-full max-h-full object-contain animate-fade-in"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;