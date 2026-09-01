import { Button } from "@/components/ui/button";
import { ArrowRight, Dog, Bone, Trophy, ShieldStar } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const GallerySection = () => {
  const categories = [
    {
      icon: Dog,
      title: "Our Dogs",
      description: "Champion bloodline breeding dogs",
      src: "/lovable-uploads/0d1e1051-e6d3-42c1-9102-f592d9acc724.png",
      alt: "Makena - German Shepherd champion bloodline",
      category: "breeding",
    },
    {
      icon: Bone,
      title: "Puppies",
      description: "Available & upcoming litters",
      src: "/lovable-uploads/chuma.jpg",
      alt: "Chuma - Kirangi puppy",
      category: "puppies",
    },
    {
      icon: Trophy,
      title: "Competitions",
      description: "Dog shows & Mount Kenya Expo",
      src: "/lovable-uploads/mount-kenya-expo-7.jpg",
      alt: "Mount Kenya Dog Expo 2024",
      category: "competitions",
    },
    {
      icon: ShieldStar,
      title: "Elite Protection",
      description: "Trained protection dogs at work",
      src: "/lovable-uploads/rock-1.jpg",
      alt: "Rock of Kirangi - Elite protection dog",
      category: "protection",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore the dogs of Kirangi by category.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {categories.map((item, index) => (
            <Link key={index} to={`/gallery?category=${item.category}`} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <item.icon className="w-4 h-4 text-secondary" weight="duotone" />
                <h3 className="font-heading text-base text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
            </Link>
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
