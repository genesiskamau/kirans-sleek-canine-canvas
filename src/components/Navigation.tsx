import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X, Phone, Crown, Diamond, Star } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Puppies", href: "#puppies" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
      isScrolled 
        ? 'glass-divine backdrop-blur-3xl cosmic-border glow-divine' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-28">
          {/* Divine logo treatment */}
          <div className="flex items-center space-x-4 group hover-divine">
            <div className="relative">
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-14 h-14 animate-luxury-float group-hover:scale-125 transition-all duration-700 relative z-10"
              />
              <Crown className="absolute -top-1 -right-1 w-5 h-5 text-gold animate-bounce-gentle" />
              <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-cosmic animate-glow-pulse" />
            </div>
            <div className="flex flex-col">
              <span className={`font-luxury font-bold text-2xl transition-all duration-500 hover-float ${
                isScrolled ? 'text-cosmic' : 'text-diamond'
              }`}>
                ✦ KIRANGI ✦
              </span>
              <span className={`font-premium text-xs tracking-[0.3em] transition-all duration-500 ${
                isScrolled ? 'text-muted-foreground' : 'text-diamond/80'
              }`}>
                DIVINE CANINES
              </span>
            </div>
          </div>

          {/* Divine navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-8 py-4 font-premium font-bold tracking-wider transition-all duration-700 rounded-2xl group hover-divine glass-premium ${
                  isScrolled 
                    ? 'text-foreground hover:text-cosmic glow-cosmic' 
                    : 'text-diamond hover:text-gold glow-divine'
                }`}
              >
                <span className="relative z-10 text-sm">{item.label.toUpperCase()}</span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cosmic via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-30 transition-all duration-1000 morph-divine"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-gold via-cosmic to-cyan-400 group-hover:w-full transition-all duration-1000 glow-cosmic"></div>
                <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-gold opacity-0 group-hover:opacity-100 animate-bounce-gentle transition-opacity duration-500" />
              </button>
            ))}
            <div className="ml-8">
              <Button 
                size="sm" 
                className="cosmic-border bg-gradient-to-r from-gold via-yellow-400 to-gold hover-divine text-primary px-10 py-4 glow-divine transition-all duration-1000 font-premium font-bold tracking-wider relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                <Phone className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">DIVINE CALL</span>
                <Crown className="w-4 h-4 ml-3 relative z-10 animate-glow-pulse" />
              </Button>
            </div>
          </div>

          {/* Premium mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-4 transition-all duration-500 hover-luxury ${
              isScrolled 
                ? 'bg-gradient-gold text-primary shadow-gold' 
                : 'glass-luxury text-white backdrop-blur-2xl'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Premium mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-6 right-6 mt-4 bg-card/95 backdrop-blur-3xl border-2 metallic-border rounded-2xl shadow-royal animate-elegant-scale z-50">
            <div className="p-8 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-6 py-4 text-left font-premium font-semibold text-foreground hover:bg-accent/20 rounded-lg transition-all duration-500 hover-luxury tracking-wide"
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
              <div className="pt-6 border-t border-border/30">
                <Button className="w-full bg-gradient-gold hover:scale-105 text-primary py-4 shadow-gold transition-all duration-500 font-premium font-bold tracking-wide hover-luxury">
                  <Phone className="w-5 h-5 mr-3" />
                  CALL +254-785-535-569
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;