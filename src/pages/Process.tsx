import Navigation from "@/components/Navigation";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Process = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-20">
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Process;
