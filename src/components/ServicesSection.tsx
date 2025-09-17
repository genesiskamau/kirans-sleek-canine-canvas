import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Target, Zap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Crown,
      title: "Premium Dog Breeding Kenya",
      description: "Kenya's best dog breeder specializing in selective breeding of Black Russian Terriers, German Shepherds, and English Springer Spaniels from world-class sires and dams. Every puppy comes with full registration and pedigree documentation from Kenya's premier kennel.",
      features: [
        "Kenya's #1 registered dog breeder with East Africa Kennel Club", 
        "World-class champion bloodlines",
        "Full pedigree registration",
        "Premium dog breeding services Kenya"
      ],
      color: "bg-primary"
    },
    {
      icon: Target,
      title: "Professional Dog Training Kenya - Kirangi Dog Academy",
      description: "Kenya's premier dog training academy offering professional dog training services in Nairobi, Mombasa, Kisumu and across Kenya. Our expert dog trainers provide comprehensive training covering obedience, protection work, dog sports, and specialized training.",
      features: [
        "Professional dog training Kenya",
        "Obedience training Nairobi",
        "Protection dog training",
        "Dog sports training Kenya",
        "Scent work and detection training",
        "Service and therapy dog training",
        "Puppy training programs",
        "Adult dog behavioral training"
      ],
      color: "bg-accent"
    },
    {
      icon: Zap,
      title: "K9 Security Services Kenya",
      description: "Kenya's leading K9 security services providing professional protection dogs and security solutions across Kenya. Our well-trained protection dogs are ready for deployment for events, personal protection, and commercial security coverage in Nairobi, Mombasa, Kisumu and throughout Kenya.",
      features: [
        "Professional K9 security Kenya",
        "Event security services",
        "Personal protection dogs",
        "Commercial security dogs",
        "Residential security dogs",
        "Estate security services",
        "Immediate deployment Kenya-wide",
        "24/7 security dog services"
      ],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kenya's Best Dog Breeding, Training & Kennel Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenya's #1 dog breeder and trainer offering premium dog breeding, professional dog training, kennel services, and K9 security solutions across Kenya, Nairobi, Mombasa, Kisumu and East Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-0 shadow-card hover:shadow-warm transition-all duration-500 transform hover:scale-105 overflow-hidden animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${index * 300}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="relative">
                <div className={`absolute top-0 left-0 right-0 h-2 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-4 rounded-lg ${service.color.replace('bg-', 'bg-')} text-white transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700 shadow-lg group-hover:shadow-xl`}>
                    <service.icon className="w-8 h-8 group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-warm"
            onClick={() => window.open('https://wa.me/254785535569', '_blank')}
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;