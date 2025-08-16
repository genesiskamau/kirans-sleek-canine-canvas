import { PawPrint, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Kirangi Dogs</h3>
            <p className="opacity-90 mb-4">
              Premium dog breeding and training services in Kenya. We breed the best, train the best!
            </p>
            <p className="text-sm opacity-75">
              Dogs Registered with The Kennel Club of Kenya
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>+254-785-535-569</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>uniquepawkennels@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Kenya</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Black Russian Terrier Breeding</li>
              <li>German Shepherd Breeding</li>
              <li>Professional Dog Training</li>
              <li>K-9 Security Services</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center space-y-3">
          <p className="flex items-center justify-center space-x-2 text-sm opacity-75">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>for dog lovers everywhere</span>
          </p>
          <p className="text-sm opacity-75">
            © 2025 kirangidogs.com - All rights reserved
          </p>
          <p className="text-sm opacity-60">
            Made By Genco Designs- Genesis Kamau
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;