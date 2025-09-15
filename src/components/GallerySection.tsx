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
      alt: "Makena of Kirangi",
      category: "breeding",
      title: "Makena of Kirangi",
      description: "Elegant German Shepherd from our champion bloodline"
    },
    {
      id: 2,
      src: "/lovable-uploads/0d2a9967-a9a7-4700-8573-2df3d6445a0f.png",
      alt: "Remi Wetu Of Kirangi",
      category: "breeding",
      title: "Remi Wetu Of Kirangi",
      description: "Show quality German Shepherd with exceptional conformation"
    },
    {
      id: 3,
      src: "/lovable-uploads/d2d80c55-ee34-4615-be86-9ceea921ae80.png",
      alt: "Anja Of Kirangi",
      category: "breeding",
      title: "Anja Of Kirangi",
      description: "Magnificent Black Russian Terrier from our kennel"
    },
    {
      id: 4,
      src: "/lovable-uploads/f8d5f6f0-572c-44ea-930b-cc5738778cef.png",
      alt: "Periclesz oF Kirangi",
      category: "breeding",
      title: "Periclesz oF Kirangi",
      description: "Champion dog excelling in competitive training"
    },
    {
      id: 5,
      src: "/lovable-uploads/b5b5cffe-0477-45d1-9d18-128381fbf7f8.png",
      alt: "Ndegwa",
      category: "competitions",
      title: "Ndegwa",
      description: "Award winning dog at the Nanyuki Dog Show"
    },
    {
      id: 6,
      src: "/lovable-uploads/114f791e-cafd-43fb-9ba1-13f201fc641d.png",
      alt: "Salsa Of Kirangi",
      category: "competitions", 
      title: "Salsa Of Kirangi",
      description: "Champion celebrating competition success"
    },
    {
      id: 18,
      src: "/lovable-uploads/mount-kenya-expo-1.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Border Collie showcasing agility and training excellence"
    },
    {
      id: 19,
      src: "/lovable-uploads/mount-kenya-expo-2.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024", 
      description: "Agility training demonstration with multiple dogs"
    },
    {
      id: 20,
      src: "/lovable-uploads/mount-kenya-expo-3.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Scent detection training exercise"
    },
    {
      id: 21,
      src: "/lovable-uploads/mount-kenya-expo-4.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Black Russian Terrier obedience training session"
    },
    {
      id: 22,
      src: "/lovable-uploads/mount-kenya-expo-5.jpg",
      alt: "Mount Kenya Dog Expo 2024", 
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Professional dog handler demonstrating training techniques"
    },
    {
      id: 23,
      src: "/lovable-uploads/mount-kenya-expo-6.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Active training session with Black Russian Terrier"
    },
    {
      id: 24,
      src: "/lovable-uploads/mount-kenya-expo-7.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Award ceremony - prize presentation at the expo"
    },
    {
      id: 25,
      src: "/lovable-uploads/mount-kenya-expo-8.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Certificate presentation with Black Russian Terrier winner"
    },
    {
      id: 26,
      src: "/lovable-uploads/mount-kenya-expo-9.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Winning moment - English Springer Spaniel at the expo"
    },
    {
      id: 9,
      src: "/lovable-uploads/lulu-1.jpg",
      alt: "Lulu of Kirangi Dogs",
      category: "springer",
      title: "Lulu of Kirangi Dogs",
      description: "One of our Detection Dogs - English Springer Spaniel"
    },
    {
      id: 10,
      src: "/lovable-uploads/lulu-2.jpg", 
      alt: "Lulu of Kirangi Dogs",
      category: "springer",
      title: "Lulu of Kirangi Dogs",
      description: "Professional detection work - English Springer Spaniel"
    },
    {
      id: 11,
      src: "/lovable-uploads/lulu-3.jpg",
      alt: "Lulu of Kirangi Dogs", 
      category: "springer",
      title: "Lulu of Kirangi Dogs",
      description: "Expert scent detection training"
    },
    {
      id: 12,
      src: "/lovable-uploads/lulu-4.jpg",
      alt: "Lulu of Kirangi Dogs",
      category: "springer",
      title: "Lulu of Kirangi Dogs", 
      description: "Active detection dog in training"
    },
    {
      id: 13,
      src: "/lovable-uploads/lulu-5.jpg",
      alt: "Lulu of Kirangi Dogs",
      category: "springer",
      title: "Lulu of Kirangi Dogs",
      description: "English Springer Spaniel detection specialist"
    },
    {
      id: 14,
      src: "/lovable-uploads/rock-1.jpg",
      alt: "Rock of Kirangi",
      category: "protection",
      title: "Rock of Kirangi",
      description: "Elite protection dog - Sable German Shepherd male"
    },
    {
      id: 15,
      src: "/lovable-uploads/rock-2.jpg",
      alt: "Rock of Kirangi",
      category: "protection",
      title: "Rock of Kirangi",
      description: "Professional protection training session"
    },
    {
      id: 16,
      src: "/lovable-uploads/rock-3.jpg",
      alt: "Rock of Kirangi",
      category: "protection",
      title: "Rock of Kirangi",
      description: "Elite sable German Shepherd in action"
    },
    {
      id: 17,
      src: "/lovable-uploads/rock-4.jpg",
      alt: "Rock of Kirangi",
      category: "protection",
      title: "Rock of Kirangi",
      description: "Expert protection dog showing discipline"
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
    { id: "competitions", label: "Competitions", icon: Award },
    { id: "springer", label: "English Springer Spaniel", icon: Dog },
    { id: "protection", label: "Elite Protection Dogs", icon: Award }
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
    <section id="gallery" className="py-32 bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header with Calligraphy */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block">
            {/* Ornate decorative frame */}
            <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
            <div className="relative bg-gradient-to-br from-background/80 via-background/90 to-background/80 backdrop-blur-xl rounded-3xl border border-primary/20 shadow-[0_0_50px_-12px_rgba(var(--primary-rgb),0.25)] p-12 mb-8">
              <div className="flex items-center justify-center mb-6">
                <h2 className="font-dancing text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mr-8">
                  Visual
                </h2>
                <h2 className="font-vibes text-6xl md:text-8xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Journey
                </h2>
              </div>
              
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent flex-1"></div>
              </div>

              <p className="font-tangerine text-2xl md:text-3xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed italic">
                "Through the lens of passion, witness our chronicles of canine mastery — from championship triumphs to tender puppy moments, each frame tells the story of our dedication to breeding excellence"
              </p>
            </div>
          </div>

          {/* Elegant Category Filter */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-full backdrop-blur-xl border transition-all duration-500 hover:scale-110 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary/20 to-accent/20 border-primary/40 shadow-[0_0_30px_-8px_rgba(var(--primary-rgb),0.4)]' 
                      : 'bg-background/60 border-border/40 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`} />
                    <span className={`font-amatic text-xl font-bold transition-colors ${isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {category.label}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hexagonal Gallery Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})` 
                }}
                onClick={() => openLightbox(item.src, index)}
              >
                {/* Floating Card with Elegant Design */}
                <div className="relative transform transition-all duration-700 hover:scale-105 hover:rotate-0 hover:-translate-y-8">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl rounded-3xl border border-border/40 overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_-8px_rgba(var(--primary-rgb),0.3)] transition-all duration-700">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={item.src} 
                        alt={item.alt}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125"
                      />
                      
                      {/* Elegant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className="backdrop-blur-sm bg-white/90 font-amatic text-sm font-bold px-3 py-1">
                              {item.category}
                            </Badge>
                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                              <Award className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <h3 className="font-luxury text-white font-bold text-lg mb-2 drop-shadow-lg">{item.title}</h3>
                          <p className="font-tangerine text-white/90 text-lg leading-relaxed drop-shadow-md italic">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="p-6 bg-gradient-to-r from-background/90 to-background/80">
                      <div className="flex items-center justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1"></div>
                        <div className="text-2xl font-signature text-primary/60 mx-4">◊</div>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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