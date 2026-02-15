import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, CalendarHeart } from "lucide-react";
import { Link } from "react-router-dom";

const PuppiesSection = () => {
  const availablePuppies = [
    {
      id: 1,
      name: "Chuma",
      breed: "German Shepherd",
      age: "7 months",
      gender: "Male",
      price: "Contact for pricing",
      features: ["Champion bloodline", "Fully vaccinated", "Protection dogs in training"],
      image: "/lovable-uploads/chuma.jpg",
      available: false
    },
    {
      id: 2,
      name: "Kito",
      breed: "German Shepherd",
      age: "7 months",
      gender: "Male",
      price: "Contact for pricing",
      features: ["Show quality", "Early training", "Socialized"],
      image: "/lovable-uploads/kito.jpg",
      available: false
    },
    {
      id: 3,
      name: "Safi",
      breed: "German Shepherd",
      age: "7 months",
      gender: "Male",
      price: "Contact for pricing",
      features: ["Working line", "Protection dogs in training", "Protective instinct", "Family friendly"],
      image: "/lovable-uploads/safi.jpg",
      available: false
    }
  ];

  return (
    <section id="puppies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Breeding Program</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Premium Puppies
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10">
            Our selective breeding program produces exceptional dogs from champion bloodlines.
          </p>
          
          {/* BRT December Litter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card border border-secondary/20 rounded-2xl p-8">
              <CalendarHeart className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-xl text-foreground mb-3">
                Black Russian Terrier Puppies — Coming in December
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Reserve your spot for our upcoming champion bloodline litter. Limited availability.
              </p>
              <Link to="/puppy-form">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Reserve Your Puppy
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {availablePuppies.map((puppy) => (
            <Card key={puppy.id} className={`bg-card border-border overflow-hidden ${!puppy.available ? 'opacity-70' : ''}`}>
              <div className="relative">
                <img 
                  src={puppy.image} 
                  alt={`${puppy.name} - ${puppy.breed}`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <Badge className={`absolute top-3 left-3 ${puppy.available ? 'bg-primary' : 'bg-muted text-muted-foreground'}`}>
                  {puppy.available ? "Available" : "Sold"}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-xl text-foreground">
                  {puppy.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {puppy.breed} · {puppy.gender} · {puppy.age}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {puppy.features.map((f, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground">
                      {f}
                    </Badge>
                  ))}
                </div>
                <Button 
                  className="w-full bg-muted text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  Sold
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PuppiesSection;
