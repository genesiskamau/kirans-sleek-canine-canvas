import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, GraduationCap, Shield, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Premium Breeding",
      description: "We do selective breeding of Black Russian Terriers and German Shepherds from world-class sires and dams. Every puppy comes with full registration and health guarantees.",
      features: [
        "Genetic health screening",
        "Kennel Club registration",
        "World-class bloodlines",
        "Health guarantees"
      ],
      color: "bg-primary"
    },
    {
      icon: GraduationCap,
      title: "Kirangi Dog Academy",
      description: "Professional training services covering functional obedience, protection work, dog sports, and scent work. Our experienced trainers work with dogs of all ages.",
      features: [
        "Functional obedience",
        "Protection training",
        "Dog sports preparation",
        "Scent work training"
      ],
      color: "bg-accent"
    },
    {
      icon: Shield,
      title: "K-9 Security Services",
      description: "Our well-trained protection dogs are always ready for deployment to events for security coverage. Professional, reliable, and highly effective.",
      features: [
        "Event security",
        "Personal protection",
        "Trained professionals",
        "Immediate deployment"
      ],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From breeding exceptional dogs to professional training and security services, 
            we offer comprehensive solutions for all your canine needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-0 shadow-card hover:shadow-warm transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
            >
              <CardHeader className="relative">
                <div className={`absolute top-0 left-0 right-0 h-1 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-full ${service.color.replace('bg-', 'bg-')} text-white`}>
                    <service.icon className="w-6 h-6" />
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
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-warm"
          >
            Get a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;