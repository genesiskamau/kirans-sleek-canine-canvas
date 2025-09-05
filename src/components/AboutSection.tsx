import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PawPrint, Award, Heart, Shield } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Registered Dogs",
      description: "Dogs Registered with East Africa Kennel Club"
    },
    {
      icon: Heart,
      title: "Genetic Screening",
      description: "Thorough testing over many generations"
    },
    {
      icon: Shield,
      title: "Working Lines",
      description: "Top quality bloodlines from world-class sires"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary rounded-full">
              <PawPrint className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story & Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Kirangi Dogs Kennel is dedicated to the breeding and training of working line 
            Black Russian Terriers and German Shepherds. We are committed to providing our 
            clients with the best services possible through selective breeding from world-class 
            bloodlines.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-0 shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="px-4 py-2">Black Russian Terriers</Badge>
              <Badge variant="secondary" className="px-4 py-2">German Shepherds</Badge>
              <Badge variant="secondary" className="px-4 py-2">Working Lines</Badge>
              <Badge variant="secondary" className="px-4 py-2">East Africa Kennel Club</Badge>
            </div>
            <blockquote className="font-serif text-2xl text-primary font-semibold italic">
              "We simply breed the best, and train the best!"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;