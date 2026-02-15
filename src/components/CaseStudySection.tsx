const CaseStudySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Case Study</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-10">
            A PTSD Service Dog — Trained in Kenya, Trusted Worldwide
          </h2>
          
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-secondary text-lg font-heading">US</span>
              </div>
              <div>
                <p className="text-foreground font-semibold">International Client</p>
                <p className="text-sm text-muted-foreground">PTSD Service Dog Training</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              A U.S.-based client reached out to Kirangi Dogs seeking a PTSD service dog — 
              trained with the discipline and temperament needed to provide reliable, real-world 
              support during anxiety episodes, flashbacks, and high-stress situations.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Over the course of several months, Joseph Chege and the Kirangi team trained a 
              carefully selected dog through a structured program covering deep pressure therapy, 
              panic interruption, crowd navigation, and emotional grounding cues.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              The result: a calm, confident, and purpose-trained service dog that now provides 
              daily support to its owner — proof that world-class training can happen right here 
              in Kenya.
            </p>
            
            <div className="border-t border-border pt-6 mt-6">
              <p className="text-sm text-muted-foreground italic">
                "The trust our international clients place in us is not given easily. It's earned 
                through consistency, transparency, and results."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
