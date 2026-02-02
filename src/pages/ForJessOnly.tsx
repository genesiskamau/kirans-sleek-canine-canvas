import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

const ForJessOnly = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/lovable-uploads/hero-dog.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-royal" />
        <div className="relative z-10 text-center px-4">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            For Jess Only
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A special page just for you
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20 shadow-luxury">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Welcome, Jess! 💕
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This page is exclusively for you. Feel free to let us know what special content you'd like to see here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForJessOnly;