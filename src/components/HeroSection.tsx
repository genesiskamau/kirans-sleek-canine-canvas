import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-dog.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center pt-32 pb-20">
        {/* Logo */}
        <div className="mb-10">
          <img 
            src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
            alt="Kirangi Dogs Logo" 
            className="w-24 h-24 rounded-full mx-auto border-2 border-secondary/30"
            width="96"
            height="96"
            loading="eager"
          />
        </div>
        
        {/* Main headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 max-w-5xl mx-auto">
          Training Dogs That{" "}
          <span className="text-gold">Protect</span>,{" "}
          <span className="text-gold">Support</span> &{" "}
          <span className="text-gold">Save Lives</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Professional service dog & elite protection training in Kenya — trusted by local and international clients.
        </p>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-semibold tracking-wide"
            onClick={() => window.open('https://wa.me/254785535569', '_blank')}
          >
            Apply for Training
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-base font-semibold tracking-wide"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Consultation
          </Button>
        </div>
        
        {/* Trust badge */}
        <div className="inline-flex items-center gap-3 border border-border rounded-full px-6 py-3">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <p className="text-sm text-muted-foreground tracking-wide">
            REGISTERED WITH EAST AFRICA KENNEL CLUB
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
