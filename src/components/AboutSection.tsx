const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">About Kirangi Dogs</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-8">
            Discipline. Compassion. Purpose.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Kirangi Dogs is led by <span className="text-foreground font-semibold">Joseph Chege</span>, 
                a professional dog trainer and Occupational Therapist with many years of hands-on experience in service dog training, 
                protection work, and advanced canine behavior.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every dog that leaves our facility is trained with a philosophy rooted in ethical, 
                disciplined methods — never shortcuts. We believe that a properly trained dog 
                is the result of patience, consistency, and genuine understanding of canine psychology.
              </p>
              
              <blockquote className="border-l-2 border-secondary pl-6 py-2">
                <p className="text-foreground italic text-lg">
                  "Every dog is trained with discipline, compassion, and purpose."
                </p>
                <cite className="text-muted-foreground text-sm mt-2 block">— Joseph Chege, Founder</cite>
              </blockquote>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Our work extends beyond Kenya and covers the larger East African Community — 
                we've trained service dogs and protection dogs for clients across the region 
                and internationally. That level of trust isn't given easily. It's earned.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also maintain a selective breeding program for Black Russian Terriers, German 
                Shepherds, and English Springer Spaniels — all registered with the East Africa 
                Kennel Club and bred from champion bloodlines.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="font-heading text-2xl text-secondary">150+</div>
                  <div className="text-xs text-muted-foreground mt-1">Dogs Trained</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-secondary">5+</div>
                  <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl text-secondary">Int'l</div>
                  <div className="text-xs text-muted-foreground mt-1">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
