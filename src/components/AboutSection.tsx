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
      title: "Excellence Standards", 
      description: "Comprehensive care protocols and after sale services"
    },
    {
      icon: Users,
      title: "Expert Breeding",
      description: "Professional breeding from world-renowned lineages"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-background via-muted/30 to-card/50 relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-5 blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-10 animate-luxury-float animation-delay-1000 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Section Header */}
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-0.5 bg-gradient-gold"></div>
              <h2 className="font-signature text-7xl md:text-8xl text-primary mx-8 drop-shadow-lg transform rotate-2">
                Our Story
              </h2>
              <div className="w-24 h-0.5 bg-gradient-gold"></div>
            </div>
            <p className="font-handwritten text-3xl text-primary/70 -rotate-1 transform">
              where passion meets pedigree
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            {/* Story Content */}
            <div className="text-left animate-slide-in-left">
              {/* Enhanced story text with calligraphy accents */}
              <div className="space-y-8">
                <div className="relative">
                  <span className="font-script text-4xl text-primary/60 absolute -top-4 -left-6 rotate-12">"</span>
                  <p className="text-xl text-muted-foreground leading-relaxed font-luxury">
                    At <span className="font-signature text-3xl text-primary mx-2">Kirangi Dogs Kennel</span>, 
                    we craft legacies through exceptional breeding programs that honor the noble spirit of our canine companions.
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed font-premium">
                  Our dedication to preserving and enhancing the finest traits of 
                  <span className="font-handwritten text-2xl text-primary mx-2">Black Russian Terriers</span>, 
                  <span className="font-handwritten text-2xl text-primary mx-2">German Shepherds</span>, 
                  and <span className="font-handwritten text-2xl text-primary mx-2">English Springer Spaniels</span> 
                  has established us as Kenya's premier canine specialists.
                </p>
                
                <div className="glass-luxury rounded-2xl p-8 backdrop-blur-xl border metallic-border">
                  <blockquote className="font-script text-4xl text-primary font-medium text-center leading-relaxed">
                    "Excellence isn't just our standard—
                    <span className="font-signature text-5xl block mt-2 text-gold">it's our passion!"</span>
                  </blockquote>
                </div>
              </div>
              
            </div>
            
            {/* Enhanced visual element */}
            <div className="relative animate-slide-in-right">
              <div className="glass-luxury rounded-[2rem] p-12 backdrop-blur-3xl border-2 metallic-border shadow-royal relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 font-signature text-6xl text-gold/20 animate-luxury-float">✦</div>
                <div className="absolute bottom-4 left-4 font-signature text-4xl text-primary/20 animate-luxury-float animation-delay-500">❋</div>
                
                <div className="text-center">
                  <div className="font-handwritten text-5xl text-primary mb-8 transform -rotate-2">
                    Premium Breeds
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Badge variant="secondary" className="px-6 py-3 text-lg font-luxury bg-gradient-gold text-primary hover:scale-105 transition-transform duration-300">
                      Black Russian Terriers
                    </Badge>
                    <Badge variant="secondary" className="px-6 py-3 text-lg font-luxury bg-gradient-platinum text-foreground hover:scale-105 transition-transform duration-300">
                      German Shepherds
                    </Badge>
                    <Badge variant="secondary" className="px-6 py-3 text-lg font-luxury bg-gradient-accent text-white hover:scale-105 transition-transform duration-300">
                      English Springer Spaniels
                    </Badge>
                    <Badge variant="secondary" className="px-6 py-3 text-lg font-luxury bg-gradient-royal text-white hover:scale-105 transition-transform duration-300">
                      Working Lines
                    </Badge>
                    <Badge variant="secondary" className="px-6 py-3 text-lg font-luxury bg-gradient-primary text-white hover:scale-105 transition-transform duration-300">
                      East Africa Kennel Club
                    </Badge>
                  </div>
                  
                  <div className="font-script text-2xl text-muted-foreground italic">
                    where legends are born & made one paw at a time
                  </div>
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