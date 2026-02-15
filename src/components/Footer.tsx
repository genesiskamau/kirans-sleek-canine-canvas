import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png" 
                alt="Kirangi Dogs" 
                className="w-8 h-8 rounded-full"
              />
              <span className="font-heading text-lg text-foreground">Kirangi Dogs</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Professional service dog & elite protection dog training in Kenya. 
              Trusted by local and international clients.
            </p>
            <p className="text-xs text-muted-foreground">
              Registered with East Africa Kennel Club
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+254785535569" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-secondary" />
                +254-785-535-569
              </a>
              <a href="mailto:kirangidogs@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-secondary" />
                kirangidogs@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                Embu, Kenya
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Service & Assistance Dogs</li>
              <li>Elite Protection Dogs</li>
              <li>Advanced Dog Training</li>
              <li>Premium Breeding Program</li>
              <li>Scent & Detection Work</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © 2025 kirangidogs.com — All rights reserved
          </p>
          <p className="text-xs text-muted-foreground/60">
            Made By Genco Designs — Genesis Kamau
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
