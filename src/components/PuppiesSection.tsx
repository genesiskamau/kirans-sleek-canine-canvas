import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, Phone } from "lucide-react";
import puppyImage from "@/assets/puppy.jpg";

const PuppiesSection = () => {
  const availablePuppies = [
    {
      id: 1,
      name: "Vladimir",
      breed: "Black Russian Terrier",
      age: "8 weeks",
      gender: "Male",
      price: "Contact for pricing",
      features: ["Champion bloodline", "Health tested", "Vaccinated", "Microchipped"],
      image: puppyImage,
      available: true
    },
    {
      id: 2,
      name: "Katarina",
      breed: "Black Russian Terrier",
      age: "10 weeks",
      gender: "Female",
      price: "Contact for pricing",
      features: ["Show quality", "Health guarantee", "Early training", "Socialized"],
      image: puppyImage,
      available: true
    },
    {
      id: 3,
      name: "Boris",
      breed: "German Shepherd",
      age: "12 weeks",
      gender: "Male",
      price: "Contact for pricing",
      features: ["Working line", "Hip tested parents", "Protective instinct", "Family friendly"],
      image: puppyImage,
      available: false
    }
  ];

  return (
    <section id="puppies" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Available Puppies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our current selection of exceptional puppies from champion bloodlines. 
            Each puppy comes with health guarantees and full registration.
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
                  alt={puppy.name}
                  className="w-full h-64 object-cover"
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
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {puppy.available ? 'Reserve Now' : 'Reserved'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/5 rounded-3xl p-8 mb-8 border border-primary/10">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Puppy Guarantee & Support
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health Guarantee</h4>
                <p className="text-muted-foreground text-sm">
                  All puppies come with comprehensive health guarantees and have been 
                  thoroughly screened for genetic disorders.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Lifetime Support</h4>
                <p className="text-muted-foreground text-sm">
                  We provide ongoing support and guidance throughout your dog's life, 
                  including training advice and health consultations.
                </p>
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