import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const featuredImages = [
    {
      src: "/lovable-uploads/rock-1.jpg",
      alt: "Rock of Kirangi - Elite protection dog",
      title: "Rock of Kirangi",
    },
    {
      src: "/lovable-uploads/lulu-1.jpg",
      alt: "Lulu - Detection Dog, English Springer Spaniel",
      title: "Lulu of Kirangi",
    },
    {
      src: "/lovable-uploads/0d1e1051-e6d3-42c1-9102-f592d9acc724.png",
      alt: "Makena - German Shepherd champion bloodline",
      title: "Makena of Kirangi",
    },
    {
      src: "/lovable-uploads/b5b5cffe-0477-45d1-9d18-128381fbf7f8.png",
      alt: "Ndegwa - Award winning at Nanyuki Dog Show",
      title: "Ndegwa",
    },
    {
      src: "/lovable-uploads/mount-kenya-expo-7.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      title: "Mount Kenya Expo",
    },
    {
      src: "/lovable-uploads/rock-3.jpg",
      alt: "Protection dog training session",
      title: "Protection Training",
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {featuredImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square">
              <img 
                src={item.src} 
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-foreground text-sm font-semibold">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <Button 
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
