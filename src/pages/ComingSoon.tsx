import { useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  useEffect(() => {
    document.title = "Coming Soon | Kirangi Dogs";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F0F0F]">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-dog.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/95 via-[#0F0F0F]/85 to-[#0F0F0F]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/e809515a-f089-4ecc-8f2c-98fc7069cd50.png"
            alt="Kirangi Dogs Logo"
            className="w-24 h-24 rounded-full mx-auto border-2 border-[#0E3B2E]/50"
            width="96"
            height="96"
            loading="eager"
          />
        </div>

        {/* Brand name */}
        <p className="text-xs tracking-[0.3em] text-[#C8A45C] uppercase mb-4">
          Kirangi Dogs Kennel
        </p>

        {/* Main heading */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mb-6 leading-tight">
          Coming Soon
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          We're updating our website to better serve you. Our new experience is
          almost ready — bringing you the same premium service dogs, protection
          dogs, and world-class breeding you trust.
        </p>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-[#0E3B2E] text-white hover:bg-[#0E3B2E]/90 px-8 py-6 text-base font-semibold tracking-wide"
            onClick={() => window.open("https://wa.me/254785535569", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Us
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-base font-semibold tracking-wide"
            onClick={() => window.open("tel:+254785535569")}
          >
            <Phone className="w-5 h-5 mr-2" />
            +254 785 535 569
          </Button>
        </div>

        {/* Email */}
        <a
          href="mailto:kirangidogs@gmail.com"
          className="inline-flex items-center gap-2 text-white/60 hover:text-[#C8A45C] transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="text-sm tracking-wide">kirangidogs@gmail.com</span>
        </a>
      </div>

      {/* Footer attribution */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <p className="text-white/40 text-xs tracking-wide">
          Designed by{" "}
          <a
            href="https://gencodesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C8A45C] transition-colors"
          >
            Genesis Kamau
          </a>
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
