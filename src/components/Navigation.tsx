import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

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
    { label: "Contact", href: "#contact" },
    { label: "Reserve Puppy", href: "/puppy-form", isExternal: true }
  ];

  const scrollToSection = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      return; // Let the Link component handle external navigation
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'glass-luxury backdrop-blur-3xl border-b metallic-border shadow-royal' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Premium logo treatment */}
          <div className="flex items-center space-x-4 group">
            <img 
              src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
              alt="Kirangi Dogs Logo" 
              className="w-10 h-10 animate-luxury-float group-hover:scale-110 transition-all duration-500"
            />
            <div className="flex flex-col">
              <span className={`font-luxury font-bold text-xl transition-all duration-500 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                KIRANGI
              </span>
              <span className={`font-premium text-xs tracking-widest transition-all duration-500 ${
                isScrolled ? 'text-muted-foreground' : 'text-white/70'
              }`}>
                PREMIUM DOGS
              </span>
            </div>
          </div>

          {/* Premium navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.isExternal ? (
                <Link key={item.label} to={item.href}>
                  <button
                    className={`relative px-6 py-3 font-premium font-semibold tracking-wide transition-all duration-500 rounded-lg group hover-luxury ${
                      isScrolled 
                        ? 'text-foreground hover:text-primary' 
                        : 'text-white hover:text-gold'
                    }`}
                  >
                    <span className="relative z-10 text-sm">{item.label.toUpperCase()}</span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-500"></div>
                  </button>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-6 py-3 font-premium font-semibold tracking-wide transition-all duration-500 rounded-lg group hover-luxury ${
                    isScrolled 
                      ? 'text-foreground hover:text-primary' 
                      : 'text-white hover:text-gold'
                  }`}
                >
                  <span className="relative z-10 text-sm">{item.label.toUpperCase()}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-gold opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-500"></div>
                </button>
              )
            ))}
            <div className="ml-8">
              <Button 
                size="sm" 
                className="bg-gradient-gold hover:scale-105 text-primary px-8 py-3 shadow-gold hover:shadow-2xl transition-all duration-500 font-premium font-bold tracking-wide hover-luxury"
              >
                <Phone className="w-4 h-4 mr-2" />
                CALL NOW
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
                item.isExternal ? (
                  <Link key={item.label} to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <button
                      className="block w-full px-6 py-4 text-left font-premium font-semibold text-foreground hover:bg-accent/20 rounded-lg transition-all duration-500 hover-luxury tracking-wide"
                    >
                      {item.label.toUpperCase()}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full px-6 py-4 text-left font-premium font-semibold text-foreground hover:bg-accent/20 rounded-lg transition-all duration-500 hover-luxury tracking-wide"
                  >
                    {item.label.toUpperCase()}
                  </button>
                )
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