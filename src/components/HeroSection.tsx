import { Button } from "@/components/ui/button";
import { PawPrint, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-card">
      {/* Luxury mesh background */}
      <div className="absolute inset-0 mesh-luxury opacity-40"></div>
      
      {/* Sophisticated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-platinum rounded-full opacity-20 animate-luxury-float animation-delay-500 blur-xl"></div>
      </div>
      
      {/* Premium background image with royal overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-dog.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-royal opacity-70"></div>
      </div>
      
      {/* Luxury content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-48 md:pt-56">
        <div className="animate-elegant-scale">
          {/* Premium logo presentation */}
          <div className="space-y-8 mb-16">
            <div className="relative group mx-auto w-fit">
              {/* Circular background with glass effect */}
              <div className="w-40 h-40 glass-luxury backdrop-blur-3xl rounded-full overflow-hidden p-4 border-2 border-yellow-400/30 shadow-royal mx-auto group-hover:scale-105 transition-all duration-700">
                <img 
                  src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
                  alt="Kirangi Dogs Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl rounded-full group-hover:rotate-6 animate-royal-pulse"
                />
              </div>
              {/* Luxury glow effect */}
              <div className="absolute inset-0 w-40 h-40 bg-gradient-gold rounded-full opacity-20 blur-xl animate-royal-pulse mx-auto"></div>
            </div>
          </div>
          
          {/* Luxury typography */}
          <div className="space-y-8 mb-16">
            <h1 className="font-luxury font-bold text-7xl md:text-9xl leading-none tracking-tight">
              <span className="text-gold block animate-elegant-scale drop-shadow-2xl">
                KIRANGI
              </span>
              <span className="text-white block text-4xl md:text-6xl font-light mt-4 tracking-widest animate-elegant-scale animation-delay-300">
                DOGS
              </span>
            </h1>
            
            <div className="w-24 h-0.5 bg-gradient-gold mx-auto animate-golden-shimmer"></div>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95 animate-fade-in-up animation-delay-600 font-premium font-light">
              Master breeders specializing in champion-grade 
              <span className="text-gold font-semibold"> Black Russian Terriers </span> 
              and 
              <span className="text-gold font-semibold"> German Shepherds </span>
              from world-class bloodlines
            </p>
          </div>
          
          {/* Luxury action buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 animate-fade-in-up animation-delay-900">
            <Button 
              size="lg" 
              className="group bg-gradient-gold hover:scale-110 text-primary px-12 py-8 text-xl font-bold shadow-gold hover:shadow-2xl transition-all duration-700 hover:glow-gold font-premium tracking-wide hover-luxury"
            >
              <Phone className="w-6 h-6 mr-4 group-hover:animate-bounce" />
              CALL +254-785-535-569
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-luxury group text-white hover:bg-white/10 px-12 py-8 text-xl font-bold backdrop-blur-2xl hover:scale-110 transition-all duration-700 hover:shadow-platinum font-premium tracking-wide hover-luxury"
            >
              <Mail className="w-6 h-6 mr-4 group-hover:animate-bounce" />
              INQUIRE NOW
            </Button>
          </div>
          
          {/* Premium certification badge */}
          <div className="glass-luxury rounded-xl px-8 py-4 mx-auto w-fit backdrop-blur-2xl border metallic-border shadow-platinum">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gradient-gold rounded-full animate-royal-pulse"></div>
              <p className="text-lg text-white font-premium font-medium tracking-wide">
                REGISTERED BY EAST AFRICA KENNEL CLUB
              </p>
              <div className="w-3 h-3 bg-gradient-gold rounded-full animate-royal-pulse animation-delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;