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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`rounded-xl p-2 transition-all duration-300 ${
              isScrolled 
                ? 'bg-yellow-400' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <img 
                src="/lovable-uploads/3eb3333d-5f52-4ded-87dd-83a308207920.png" 
                alt="Kirangi Dogs Logo" 
                className="w-8 h-8"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                KIRANGI
              </span>
              <span className={`text-xs tracking-wider transition-all duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/70'
              }`}>
                PREMIUM DOGS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-semibold transition-all duration-300 hover:text-yellow-400 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg px-6 py-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              CALL NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-yellow-400 text-black' 
                : 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-xl border">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full px-4 py-3 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg py-3">
                  <Phone className="w-4 h-4 mr-2" />
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