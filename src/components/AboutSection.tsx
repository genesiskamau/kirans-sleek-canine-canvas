import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Trophy, Star } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Trophy,
      title: "Elite Bloodlines",
      description: "Champion pedigree dogs registered with East Africa Kennel Club"
    },
    {
      icon: Target,
      title: "Health Excellence",
      description: "Rigorous genetic testing and health screenings"
    },
    {
      icon: Users,
      title: "Expert Breeding",
      description: "Professional breeding from world-renowned lineages"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-left">
              <div className="flex items-center mb-6">
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Heritage
                </h2>
                <div className="mx-6 text-6xl font-light text-primary opacity-30">
                  <span className="font-serif italic">✦</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Excellence
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Kirangi Dogs Kennel, we craft legacies through exceptional breeding programs. 
                Our dedication to preserving and enhancing the finest traits of Black Russian Terriers 
                and German Shepherds has established us as Kenya's premier canine specialists.
              </p>
              <div className="flex items-center gap-4">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Est. 2020 • Award-Winning Bloodlines</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <blockquote className="font-serif text-2xl text-primary font-semibold italic text-center">
                  "Excellence isn't just our standard—it's our passion!"
                </blockquote>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="px-4 py-2">Black Russian Terriers</Badge>
                  <Badge variant="secondary" className="px-4 py-2">German Shepherds</Badge>
                  <Badge variant="secondary" className="px-4 py-2">Working Lines</Badge>
                  <Badge variant="secondary" className="px-4 py-2">East Africa Kennel Club</Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group bg-gradient-to-br from-card via-card to-card/50 border-0 shadow-card hover:shadow-warm transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <highlight.icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;