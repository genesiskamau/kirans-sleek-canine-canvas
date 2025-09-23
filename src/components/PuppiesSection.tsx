import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Phone, Shield, Award } from "lucide-react";
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
      available: true
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
      available: true
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
      available: true
    }
  ];

  return (
    <section id="puppies" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Pups Ready for Loving Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our current selection of exceptional puppies from champion bloodlines.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {availablePuppies.map((puppy) => (
            <Card 
              key={puppy.id} 
              className={`bg-card border-0 shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                !puppy.available ? 'opacity-75' : ''
              }`}
            >
              <div className="relative">
                <img 
                  src={puppy.image} 
                  alt={`${puppy.name} - ${puppy.breed} puppy available for adoption from Kirangi Dogs Kenya`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={puppy.available ? "default" : "secondary"}
                    className={puppy.available ? "bg-primary text-primary-foreground" : ""}
                  >
                    {puppy.available ? "Available" : "Reserved"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="font-serif text-2xl text-foreground mb-1">
                      {puppy.name}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {puppy.breed} • {puppy.gender} • {puppy.age}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {puppy.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs justify-center">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-semibold text-primary text-lg">
                    {puppy.price}
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    puppy.available 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-muted text-muted-foreground cursor-not-allowed'
                  }`}
                  disabled={!puppy.available}
                  onClick={() => puppy.available && window.open('tel:+254785535569', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {puppy.available ? 'Reserve Now' : 'Reserved'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-card rounded-3xl p-10 mb-8 border-2 border-primary/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-pulse"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary rounded-full shadow-lg">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Promise to You
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Quality Certified</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lifetime quality guarantee for complete peace of mind
                  </p>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Expert Guidance</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    24/7 support from training to nutrition throughout your dog's life
                  </p>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Champion Lineage</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Documented pedigree from internationally recognized bloodlines
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-warm"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call to Reserve: +254-785-535-569
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PuppiesSection;