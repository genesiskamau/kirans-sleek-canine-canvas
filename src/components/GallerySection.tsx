import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const featuredImages = [
    {
      id: 1,
      src: "/lovable-uploads/0d1e1051-e6d3-42c1-9102-f592d9acc724.png",
      alt: "Makena of Kirangi",
      category: "breeding",
      title: "Makena of Kirangi",
      description: "Elegant German Shepherd from our champion bloodline"
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
      id: 9,
      src: "/lovable-uploads/lulu-1.jpg",
      alt: "Lulu of Kirangi Dogs",
      category: "springer",
      title: "Lulu of Kirangi Dogs",
      description: "One of our Detection Dogs - English Springer Spaniel"
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
      id: 7,
      src: "/lovable-uploads/76d917e7-6e5a-47de-adc5-d6da990f5df4.png",
      alt: "German Shepherd Puppy",
      category: "puppies",
      title: "German Shepherd Puppy",
      description: "Adorable German Shepherd puppy ready for loving home"
    },
    {
      id: 24,
      src: "/lovable-uploads/mount-kenya-expo-7.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
      title: "Mount Kenya Dog Expo 2024",
      description: "Award ceremony - prize presentation at the expo"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-background via-muted to-card relative overflow-hidden">
      {/* Luxury mesh background */}
      <div className="absolute inset-0 mesh-luxury opacity-40"></div>
      
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Elegant Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
            <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border shadow-platinum p-12 mb-8">
              <h2 className="font-luxury text-4xl sm:text-6xl md:text-8xl font-bold text-gold mb-6">
                Gallery Preview
              </h2>
              
              <div className="flex items-center justify-center mb-8">
                <div className="h-px bg-gradient-gold flex-1 max-w-xs"></div>
                <div className="h-px bg-gradient-gold flex-1 max-w-xs"></div>
              </div>

              <p className="font-premium text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                A glimpse into our world of champion dogs, competitions, and breeding excellence
              </p>
            </div>
          </div>
        </div>

        {/* Featured Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {featuredImages.map((item, index) => (
            <div
              key={item.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-4">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Main Card */}
                <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border overflow-hidden shadow-platinum group-hover:shadow-gold transition-all duration-700">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={`${item.alt} - ${item.description} - Kirangi Dogs Kenya`}
                      title={`${item.title} - Premium dog breeding and training Kenya`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125"
                    />
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-luxury text-white font-bold text-lg mb-2 drop-shadow-lg">{item.title}</h3>
                        <p className="font-premium text-white/90 text-sm leading-relaxed drop-shadow-md">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="p-6 bg-gradient-to-r from-background/90 to-background/80">
                    <div className="flex items-center justify-center">
                      <div className="h-px bg-gradient-gold flex-1"></div>
                      <div className="text-2xl text-gold mx-4">◊</div>
                      <div className="h-px bg-gradient-gold flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center">
          <Link to="/gallery">
            <Button 
              size="lg"
              className="group bg-gradient-gold hover:scale-110 text-primary px-12 py-8 text-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-700 hover:glow-gold font-premium tracking-wide"
            >
              View Full Gallery
              <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
