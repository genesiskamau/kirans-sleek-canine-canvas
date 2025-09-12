import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users, Crown, Star, Diamond, Sparkles, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Crown,
      title: "Royal Bloodlines",
      description: "Divine champion pedigree dogs from celestial lineages registered with East Africa Kennel Club",
      gradient: "from-gold to-yellow-400"
    },
    {
      icon: Diamond,
      title: "Genetic Mastery",
      description: "Transcendent genetic testing and health screenings beyond mortal standards",
      gradient: "from-blue-400 to-cyan-300"
    },
    {
      icon: Zap,
      title: "Cosmic Breeding",
      description: "Otherworldly breeding techniques from interdimensional lineages",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm particles silk-texture">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="text-left relative">
              <div className="flex items-center mb-6 hover-float">
                <h2 className="font-luxury text-4xl md:text-5xl font-bold text-cosmic">
                  Divine
                </h2>
                <div className="mx-6 text-8xl font-light relative">
                  <span className="text-gold animate-glow-pulse morph-divine">◊</span>
                  <Sparkles className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 text-diamond animate-bounce-gentle" />
                </div>
                <h2 className="font-luxury text-4xl md:text-5xl font-bold text-cosmic">
                  Legacy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 relative group">
                <span className="absolute -top-2 -left-4">
                  <Crown className="w-5 h-5 text-gold animate-bounce-gentle" />
                </span>
                At Kirangi Celestial Sanctuary, we transcend mortal breeding to forge divine canine deities. 
                Our cosmic dedication to elevating the ethereal essence of Black Russian Terriers 
                and German Shepherds has crowned us as Earth's supreme celestial canine architects.
                <span className="absolute -bottom-2 -right-4">
                  <Diamond className="w-5 h-5 text-cosmic animate-glow-pulse" />
                </span>
              </p>
              <div className="flex items-center gap-4 hover-cosmic">
                <div className="flex gap-1">
                  <Star className="w-5 h-5 text-gold fill-gold animate-glow-pulse" />
                  <Star className="w-5 h-5 text-gold fill-gold animate-glow-pulse animation-delay-100" />
                  <Star className="w-5 h-5 text-gold fill-gold animate-glow-pulse animation-delay-200" />
                  <Star className="w-5 h-5 text-gold fill-gold animate-glow-pulse animation-delay-300" />
                  <Star className="w-5 h-5 text-gold fill-gold animate-glow-pulse animation-delay-500" />
                </div>
                <span className="text-cosmic font-bold text-lg">Est. 2020 ✦ Transcendent Bloodlines</span>
                <Zap className="w-5 h-5 text-cosmic animate-bounce-gentle" />
              </div>
            </div>
            <div className="relative hover-divine">
              <div className="glass-divine rounded-3xl p-10 cosmic-border glow-divine relative overflow-hidden">
                <div className="absolute inset-0 particles"></div>
                <blockquote className="font-luxury text-3xl text-cosmic font-bold italic text-center relative z-10 hover-float">
                  <Sparkles className="inline w-8 h-8 mr-3 animate-glow-pulse" />
                  "Divinity isn't our aspiration—it's our essence!"
                  <Crown className="inline w-8 h-8 ml-3 animate-bounce-gentle" />
                </blockquote>
                <div className="mt-8 flex flex-wrap justify-center gap-4 relative z-10">
                  <Badge variant="secondary" className="px-6 py-3 text-sm font-bold glass-premium hover-cosmic glow-cosmic">
                    <Diamond className="w-4 h-4 mr-2" />
                    Celestial Russian Terriers
                  </Badge>
                  <Badge variant="secondary" className="px-6 py-3 text-sm font-bold glass-premium hover-cosmic glow-divine">
                    <Crown className="w-4 h-4 mr-2" />
                    Divine German Shepherds
                  </Badge>
                  <Badge variant="secondary" className="px-6 py-3 text-sm font-bold glass-premium hover-cosmic glow-gold">
                    <Zap className="w-4 h-4 mr-2" />
                    Ethereal Bloodlines
                  </Badge>
                  <Badge variant="secondary" className="px-6 py-3 text-sm font-bold glass-premium hover-cosmic glow-platinum">
                    <Award className="w-4 h-4 mr-2" />
                    Cosmic Kennel Authority
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group glass-divine border-0 glow-divine hover-divine transition-all duration-1000 overflow-hidden relative particles">
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-1000 morph-divine`}></div>
                <div className="absolute inset-0 mesh-divine opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className={`p-6 bg-gradient-to-br ${highlight.gradient} rounded-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000 glow-cosmic shadow-2xl relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                      <highlight.icon className="w-10 h-10 text-white relative z-10 group-hover:animate-glow-pulse" />
                      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-bounce-gentle" />
                    </div>
                  </div>
                  <h3 className="font-luxury text-2xl font-bold text-cosmic mb-4 group-hover:text-cosmic transition-colors duration-500 hover-float">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-500">
                    {highlight.description}
                  </p>
                </CardContent>
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${highlight.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 glow-cosmic`}></div>
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <Crown className="w-6 h-6 text-gold m-4 animate-bounce-gentle" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;