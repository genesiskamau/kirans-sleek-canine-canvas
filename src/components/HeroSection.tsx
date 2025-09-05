import { Button } from "@/components/ui/button";
import { PawPrint, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-card">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/90988332-3cc9-4e2e-8d88-35f92bda476e.png)` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-auto w-fit border border-white/20">
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-24 h-24 mx-auto"
              />
            </div>
          </div>
          
          {/* Title */}
          <div className="space-y-4 mb-12">
            <h1 className="font-bold text-5xl md:text-7xl leading-tight">
              <span className="text-yellow-400 block">KIRANGI</span>
              <span className="text-white block text-2xl md:text-4xl font-normal mt-2">
                PREMIUM DOGS
              </span>
            </h1>
            
            <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Curators of canine excellence through the finest breeding of 
              <span className="text-yellow-400 font-semibold"> Black Russian Terriers </span> 
              and 
              <span className="text-yellow-400 font-semibold"> German Shepherds </span>
              in Kenya
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Phone className="w-5 h-5 mr-3" />
              CALL +254-785-535-569
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Mail className="w-5 h-5 mr-3" />
              INQUIRE NOW
            </Button>
          </div>
          
          {/* Badge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 mx-auto w-fit border border-white/20">
            <p className="text-sm text-white font-medium">
              REGISTERED WITH THE KENNEL CLUB OF KENYA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;