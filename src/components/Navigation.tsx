import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Puppies", href: "#puppies" },
    { label: "Gallery", href: "/gallery", isExternal: true },
    { label: "Blog", href: "/blog", isExternal: true },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
              alt="Kirangi Dogs" 
              className="w-9 h-9 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-heading text-lg text-foreground leading-tight">KIRANGI</span>
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground">DOGS</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.isExternal ? (
                <Link key={item.label} to={item.href}>
                  <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {item.label}
                  </button>
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              size="sm" 
              className="ml-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-sm font-semibold"
              onClick={() => window.open('tel:+254785535569')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-card border border-border rounded-xl shadow-luxury animate-scale-in">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link key={item.label} to={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="block w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors">
                      {item.label}
                    </button>
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full px-4 py-3 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <div className="pt-2 border-t border-border">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => window.open('tel:+254785535569')}>
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
