import { Button } from "@/components/ui/button";
import { PawPrint, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/90988332-3cc9-4e2e-8d88-35f92bda476e.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
              alt="Kirangi Dogs Logo" 
              className="w-32 h-32 mx-auto animate-float drop-shadow-2xl bg-white/10 backdrop-blur-sm rounded-full p-4 hover:animate-glow-pulse transition-all duration-500 hover:scale-110 hover:rotate-3"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-in-left">
            Kirangi Dogs
            <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90 animate-slide-in-right animation-delay-300">
              Premium Kennel
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            We breed the best, train the best! Committed to providing our clients with world-class 
            Black Russian Terriers and German Shepherds in Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in animation-delay-900">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-warm transform hover:scale-110 transition-all duration-500 hover:shadow-glow hover:animate-glow-pulse"
            >
              <Phone className="w-5 h-5 mr-2 animate-bounce-gentle" />
              Call Now: +254-785-535-569
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm transform hover:scale-110 transition-all duration-500 hover:shadow-glow hover:rotate-1"
            >
              <Mail className="w-5 h-5 mr-2 animate-bounce-gentle animation-delay-300" />
              Get In Touch
            </Button>
          </div>
          
          <div className="text-sm opacity-75">
            Dogs Registered with The Kennel Club of Kenya
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer hover:scale-125 transition-transform duration-300">
        <div className="w-1 h-16 bg-white/30 rounded-full relative">
          <div className="w-1 h-4 bg-white rounded-full absolute top-0 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;