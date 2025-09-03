import { Button } from "@/components/ui/button";
import { PawPrint, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full opacity-20 animate-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full opacity-15 animate-float-gentle animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-accent/30 to-transparent rounded-full animate-glow-pulse animation-delay-500"></div>
      </div>
      
      {/* Main background image with modern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/90988332-3cc9-4e2e-8d88-35f92bda476e.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-in-blur">
          {/* Logo with glassmorphism */}
          <div className="mb-12 relative">
            <div className="glass rounded-3xl p-8 mx-auto w-fit backdrop-blur-2xl border border-white/20 shadow-glass animate-float-gentle">
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-24 h-24 mx-auto drop-shadow-2xl hover:scale-110 transition-all duration-700 hover:rotate-6 hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]"
              />
            </div>
          </div>
          
          {/* Modern typography with gradient text */}
          <div className="space-y-6 mb-12">
            <h1 className="font-bold text-6xl md:text-8xl leading-none">
              <span className="text-gradient-primary block animate-slide-in-blur">
                Kirangi
              </span>
              <span className="text-white block text-4xl md:text-5xl font-light mt-2 animate-slide-in-blur animation-delay-300">
                Premium Dogs
              </span>
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-white/90 animate-fade-in-up animation-delay-600 font-light">
              Elevating canine excellence through world-class breeding of 
              <span className="text-gradient-secondary font-semibold"> Black Russian Terriers </span> 
              and 
              <span className="text-gradient-secondary font-semibold"> German Shepherds </span>
              in Kenya
            </p>
          </div>
          
          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-900">
            <Button 
              size="lg" 
              className="group bg-gradient-primary hover:scale-105 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-primary hover:shadow-2xl transition-all duration-700 hover:glow-primary border border-white/20"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Call +254-785-535-569
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold rounded-2xl backdrop-blur-lg hover:scale-105 transition-all duration-700 hover:shadow-glass"
            >
              <Mail className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              Get In Touch
            </Button>
          </div>
          
          {/* Premium badge */}
          <div className="glass rounded-full px-6 py-3 mx-auto w-fit backdrop-blur-xl border border-white/20">
            <p className="text-sm text-white/90 font-medium">
              🏆 Registered with The Kennel Club of Kenya
            </p>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-gentle cursor-pointer group hover:scale-125 transition-all duration-500">
        <div className="glass rounded-full p-4 backdrop-blur-xl border border-white/20 group-hover:glow-primary">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full relative">
            <div className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;