import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Target, Zap, ArrowRight, Crown, Diamond, Star, Wand2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Celestial Breeding",
      description: "We transcend conventional breeding with divine selection of Black Russian Terriers and German Shepherds from otherworldly sires and dams. Every celestial pup arrives with cosmic registration and eternal health guarantees.",
      features: [
        "Interdimensional genetic screening",
        "Registered with Cosmic Kennel Authority",
        "Ethereal bloodlines from celestial realms",
        "Divine health warranties"
      ],
      color: "from-gold to-yellow-400",
      glow: "glow-divine"
    },
    {
      icon: Wand2,
      title: "Mystic Training Academy",
      description: "Supernatural training services covering divine obedience, cosmic protection work, interdimensional sports, and ethereal scent work. Our transcendent trainers work with beings of all ages.",
      features: [
        "Telepathic obedience mastery",
        "Dimensional protection training",
        "Cosmic sports preparation",
        "Astral scent work training"
      ],
      color: "from-purple-500 to-pink-400",
      glow: "glow-cosmic"
    },
    {
      icon: Crown,
      title: "Divine Security Forces",
      description: "Our transcendent protection entities are perpetually prepared for deployment across dimensions for security coverage. Otherworldly, omnipotent, and supremely effective.",
      features: [
        "Multidimensional event security",
        "Cosmic personal protection",
        "Celestially trained guardians",
        "Instant ethereal deployment"
      ],
      color: "from-cyan-400 to-blue-500",
      glow: "glow-platinum"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background particles mesh-divine silk-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <Diamond className="w-12 h-12 text-cosmic animate-glow-pulse morph-divine" />
          </div>
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-cosmic mb-6 hover-float relative">
            <Sparkles className="inline w-8 h-8 mr-3 text-gold animate-bounce-gentle" />
            Divine Offerings
            <Crown className="inline w-8 h-8 ml-3 text-cosmic animate-glow-pulse" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed relative">
            <span className="absolute -top-3 -left-6">
              <Star className="w-5 h-5 text-gold animate-bounce-gentle" />
            </span>
            From transcending mortal breeding to cosmic training and interdimensional security services, 
            we manifest comprehensive solutions for all your celestial canine aspirations.
            <span className="absolute -bottom-3 -right-6">
              <Zap className="w-5 h-5 text-cosmic animate-glow-pulse" />
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-divine border-0 glow-divine hover-divine transition-all duration-1500 overflow-hidden particles relative"
              style={{ 
                animationDelay: `${index * 400}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <CardHeader className="relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-3 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1500 ease-out ${service.glow} morph-divine`}></div>
                <div className="absolute inset-0 mesh-divine opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                <div className="flex items-center space-x-6 mb-6 relative z-10">
                  <div className={`p-6 rounded-3xl bg-gradient-to-br ${service.color} group-hover:scale-150 group-hover:-rotate-12 transition-all duration-1500 ${service.glow} shadow-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                    <service.icon className="w-12 h-12 text-white relative z-10 group-hover:animate-glow-pulse" />
                    <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-white animate-bounce-gentle" />
                    <Crown className="absolute -bottom-2 -left-2 w-5 h-5 text-gold animate-glow-pulse" />
                  </div>
                  <CardTitle className="font-luxury text-3xl text-cosmic group-hover:text-cosmic transition-colors duration-500 hover-float">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-500">
                  {service.description}
                </p>
                
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-base text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      <div className={`mr-4 p-1 rounded-full bg-gradient-to-r ${service.color} ${service.glow} animate-glow-pulse`}>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1500 ${service.glow} morph-divine`}></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <Diamond className="w-8 h-8 text-cosmic animate-bounce-gentle" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <Star className="w-6 h-6 text-gold animate-glow-pulse" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="cosmic-border bg-gradient-to-r from-cosmic via-purple-500 to-cyan-400 hover-divine text-white px-16 py-8 rounded-3xl text-2xl font-bold glow-cosmic font-luxury tracking-widest relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
            <Sparkles className="w-6 h-6 mr-4 group-hover:animate-glow-pulse relative z-10" />
            <span className="relative z-10">Request Divine Consultation</span>
            <Crown className="w-6 h-6 ml-4 group-hover:animate-bounce relative z-10" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;