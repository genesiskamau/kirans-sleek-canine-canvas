import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Ready to Start?</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Not Every Dog Qualifies.<br />Not Every Client Is Accepted.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            We maintain the highest standards because the work we do changes lives. 
            If you're serious about a service or protection dog, we'd like to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-semibold"
              onClick={() => window.open('https://wa.me/254785535569', '_blank')}
            >
              Apply for Service Dog Training
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-base font-semibold"
              onClick={() => window.open('https://wa.me/254785535569', '_blank')}
            >
              Apply for Protection Training
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
