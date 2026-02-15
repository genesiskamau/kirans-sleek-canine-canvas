import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import CaseStudySection from "@/components/CaseStudySection";
import ProcessSection from "@/components/ProcessSection";
import PuppiesSection from "@/components/PuppiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 200);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {showContent && (
        <div className="min-h-screen bg-background overflow-x-hidden animate-fade-in">
          <Navigation />
          <main>
            <div id="home">
              <HeroSection />
            </div>
            <ProblemSolutionSection />
            <ServicesSection />
            <AboutSection />
            <CaseStudySection />
            <ProcessSection />
            <PuppiesSection />
            <GallerySection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
