import { ClipboardList, Search, Settings, BarChart3, Handshake } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Application",
      description: "Submit your inquiry with details about your needs — service dog, protection dog, or training program."
    },
    {
      icon: Search,
      number: "02",
      title: "Assessment",
      description: "We conduct a suitability assessment to understand your lifestyle, requirements, and expectations."
    },
    {
      icon: Settings,
      number: "03",
      title: "Custom Plan",
      description: "A tailored training plan is developed based on your specific needs and the dog's temperament."
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Training & Updates",
      description: "Your dog undergoes structured training with regular progress reports and video updates."
    },
    {
      icon: Handshake,
      number: "05",
      title: "Handover & Support",
      description: "Comprehensive handover with handler training, followed by continued post-placement support."
    }
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">How It Works</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A clear, structured approach from initial inquiry to lifelong support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex gap-6 items-start bg-card border border-border rounded-xl p-6 hover-lift"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <span className="text-secondary text-sm font-semibold">{step.number}</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
