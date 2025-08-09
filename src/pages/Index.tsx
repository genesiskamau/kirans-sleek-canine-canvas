import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PuppiesSection from "@/components/PuppiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };
  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {showContent && (
        <div className="min-h-screen bg-background overflow-x-hidden animate-fade-in">
          <Navigation />
          <main>
            <div id="home" className="animate-fade-in">
              <HeroSection />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <AboutSection />
            </div>
            <div className="animate-slide-in-left animation-delay-400">
              <ServicesSection />
            </div>
            <div className="animate-scale-in animation-delay-600">
              <PuppiesSection />
            </div>
            <div className="animate-rotate-in animation-delay-800">
              <GallerySection />
            </div>
            <div className="animate-slide-up animation-delay-1000">
              <TestimonialsSection />
            </div>
            <div className="animate-fade-in-up animation-delay-1200">
              <ContactSection />
            </div>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
