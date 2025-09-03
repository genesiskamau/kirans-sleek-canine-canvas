import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X, Phone } from "lucide-react";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass backdrop-blur-2xl border-b border-white/10 shadow-glass' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with modern treatment */}
          <div className="flex items-center space-x-3 group">
            <div className={`rounded-xl p-2 transition-all duration-500 ${
              isScrolled ? 'bg-gradient-primary shadow-primary' : 'glass border border-white/20'
            }`}>
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-8 h-8 animate-float-gentle group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <span className={`font-bold text-lg transition-all duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Kirangi
            </span>
          </div>

          {/* Desktop Navigation with modern styling */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary hover:bg-primary/10' 
                    : 'text-white hover:text-white/90 hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            ))}
            <div className="ml-4">
              <Button 
                size="sm" 
                className="bg-gradient-primary hover:scale-105 text-white rounded-xl px-6 py-2 shadow-primary hover:shadow-2xl transition-all duration-300 border border-white/20"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button with modern styling */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-primary text-white shadow-primary' 
                : 'glass text-white backdrop-blur-xl border border-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu with glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-6 right-6 mt-2 glass backdrop-blur-2xl border border-white/20 rounded-2xl shadow-glass animate-fade-in-up">
            <div className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-4 py-3 text-left font-medium text-white hover:bg-white/10 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-white/20">
                <Button className="w-full bg-gradient-primary hover:scale-105 text-white rounded-xl py-3 shadow-primary transition-all duration-300">
                  <Phone className="w-4 h-4 mr-2" />
                  +254-785-535-569
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