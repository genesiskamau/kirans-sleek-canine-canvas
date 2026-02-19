import { Brain, Shield, GraduationCap, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Service & Assistance Dogs",
      description: "Carefully trained for individuals living with Mobility challenges, PTSD, ADHD, Anxiety, among others.",
      subheadings: ["Psychiatric Dogs", "Mobility Dogs", "Medical Alert Dogs"],
      tagline: "For: Independence, safety, stability and confidence.",
      outcomes: [
        "Panic & anxiety interruption",
        "Emotional grounding & calming",
        "Mobility tasks",
        "Routine & safety support",
        "Deep pressure therapy"
      ]
    },
    {
      icon: Shield,
      title: "Elite Protection Dogs",
      description: "Professionally trained protection dogs for private individuals, families, and high-risk professionals.",
      outcomes: [
        "Controlled protection work",
        "Obedience under pressure",
        "Ethical & responsible training",
        "Immediate deployment ready"
      ]
    },
    {
      icon: GraduationCap,
      title: "Advanced Training Programs",
      description: "Comprehensive training programs for dogs of all ages — from behavioral correction to competition-level obedience.",
      outcomes: [
        "Behavioral correction",
        "Advanced obedience",
        "Scent & detection work",
        "Custom training plans"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">What We Do</p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
            Professional Dog Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From life-changing service dogs to elite protection training, we deliver 
            results that matter — with discipline, compassion, and purpose.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-card border border-border rounded-2xl p-8 hover-lift transition-all duration-500"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 text-secondary" />
              </div>
              
              <h3 className="font-heading text-xl text-foreground mb-3">
                {service.title}
              </h3>

              {'subheadings' in service && service.subheadings && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {(service.subheadings as string[]).map((sh, i) => (
                    <span key={i} className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full font-medium">
                      {sh}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                {service.description}
              </p>

              {'tagline' in service && service.tagline && (
                <p className="text-secondary text-xs font-medium italic mb-5">{service.tagline as string}</p>
              )}
              
              <ul className="space-y-3">
                {service.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
