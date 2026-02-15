import { AlertTriangle, Heart, Shield, Brain } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    { icon: Brain, text: "PTSD episodes & flashbacks" },
    { icon: Heart, text: "Autism sensory challenges" },
    { icon: AlertTriangle, text: "Anxiety & panic disorders" },
    { icon: Shield, text: "Personal & family security concerns" },
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">The Challenge</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              When You Need More Than a Pet
            </h2>
          </div>

          {/* Pain points */}
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-center gap-4 bg-background border border-border rounded-xl p-5">
                <problem.icon className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">{problem.text}</span>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="border border-secondary/20 rounded-2xl p-8 md:p-12 bg-primary/10">
            <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">The Solution</p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Kirangi Dogs provides carefully trained service and protection dogs designed to bring{" "}
              <span className="text-secondary font-semibold">stability</span>,{" "}
              <span className="text-secondary font-semibold">safety</span>, and{" "}
              <span className="text-secondary font-semibold">confidence</span> to individuals and families 
              who need it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
