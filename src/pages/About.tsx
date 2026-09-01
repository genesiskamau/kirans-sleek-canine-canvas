import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
