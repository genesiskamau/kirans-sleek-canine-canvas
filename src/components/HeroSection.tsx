import { Button } from "@/components/ui/button";
import { Sparkles, Phone, Mail, Crown, Diamond, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-card particles">
      {/* Divine mesh background */}
      <div className="absolute inset-0 mesh-divine opacity-50 morph-divine"></div>
      
      {/* Cosmic floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-15 animate-luxury-float blur-3xl glow-cosmic"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-20 animate-luxury-float animation-delay-1000 blur-2xl glow-divine"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-platinum rounded-full opacity-25 animate-luxury-float animation-delay-500 blur-xl glow-cosmic"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-20 animate-luxury-float animation-delay-700 blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-15 animate-luxury-float animation-delay-1500 blur-xl"></div>
      </div>
      
      {/* Premium background image with cosmic overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/90988332-3cc9-4e2e-8d88-35f92bda476e.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-royal silk-texture"></div>
      </div>
      
      {/* Luxury content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-elegant-scale">
          {/* Divine logo presentation */}
          <div className="space-y-8 mb-16 relative">
            <div className="relative group">
              <div className="absolute inset-0 animate-luxury-float glow-divine rounded-full"></div>
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-40 h-40 mx-auto drop-shadow-2xl hover-divine transition-all duration-700 animate-royal-pulse relative z-10"
              />
              <div className="absolute top-2 right-2 z-20">
                <Crown className="w-8 h-8 text-gold animate-bounce-gentle" />
              </div>
              <div className="absolute -top-2 -right-2 z-20">
                <Sparkles className="w-6 h-6 text-diamond animate-glow-pulse" />
              </div>
            </div>
          </div>
          
          {/* Divine typography */}
          <div className="space-y-8 mb-16">
            <h1 className="font-luxury font-bold text-7xl md:text-9xl leading-none tracking-tight">
              <span className="text-cosmic block animate-elegant-scale drop-shadow-2xl hover-float">
                KIRANGI
              </span>
              <span className="text-diamond block text-4xl md:text-6xl font-light mt-4 tracking-widest animate-elegant-scale animation-delay-300 hover-float">
                ✦ ELITE CANINES ✦
              </span>
            </h1>
            
            <div className="relative mx-auto w-fit">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent animate-golden-shimmer"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Diamond className="w-4 h-4 text-diamond animate-glow-pulse" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-diamond animate-fade-in-up animation-delay-600 font-premium font-light relative">
              <span className="absolute -top-4 -left-4">
                <Sparkles className="w-6 h-6 text-gold animate-bounce-gentle" />
              </span>
              Divine breeders crafting legends through 
              <span className="text-cosmic font-semibold"> Elite Black Russian Terriers </span> 
              and 
              <span className="text-cosmic font-semibold"> Champion German Shepherds </span>
              from celestial bloodlines
              <span className="absolute -bottom-4 -right-4">
                <Zap className="w-6 h-6 text-cosmic animate-glow-pulse" />
              </span>
            </p>
          </div>
          
          {/* Divine action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in-up animation-delay-900">
            <Button 
              size="lg" 
              className="group cosmic-border bg-gradient-to-r from-gold via-yellow-400 to-gold hover-divine text-primary px-16 py-10 text-xl font-bold glow-divine transition-all duration-1000 font-premium tracking-wide relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              <Phone className="w-6 h-6 mr-4 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">CALL +254-785-535-569</span>
              <Sparkles className="w-5 h-5 ml-4 group-hover:animate-glow-pulse relative z-10" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-divine group text-diamond hover:bg-white/10 px-16 py-10 text-xl font-bold backdrop-blur-3xl hover-cosmic transition-all duration-1000 glow-cosmic font-premium tracking-wide relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              <Mail className="w-6 h-6 mr-4 group-hover:animate-bounce relative z-10" />
              <span className="relative z-10">DIVINE INQUIRY</span>
              <Crown className="w-5 h-5 ml-4 group-hover:animate-glow-pulse relative z-10" />
            </Button>
          </div>
          
          {/* Divine certification badge */}
          <div className="glass-divine rounded-2xl px-12 py-6 mx-auto w-fit backdrop-blur-3xl cosmic-border glow-divine hover-divine group">
            <div className="flex items-center space-x-4">
              <Crown className="w-6 h-6 text-gold animate-glow-pulse group-hover:rotate-12 transition-transform duration-500" />
              <div className="w-4 h-4 bg-gradient-to-r from-gold to-yellow-400 rounded-full animate-royal-pulse morph-divine"></div>
              <p className="text-xl text-diamond font-premium font-bold tracking-widest">
                ✦ CERTIFIED EXCELLENCE ✦ EAST AFRICA KENNEL CLUB
              </p>
              <div className="w-4 h-4 bg-gradient-to-r from-cosmic via-purple-500 to-cyan-400 rounded-full animate-royal-pulse animation-delay-500 morph-divine"></div>
              <Sparkles className="w-6 h-6 text-cosmic animate-glow-pulse group-hover:-rotate-12 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;