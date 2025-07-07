import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Kimani",
      location: "Nairobi, Kenya",
      text: "We got our Black Russian Terrier from Kirangi Dogs two years ago. The professionalism and care they showed throughout the process was exceptional. Our dog is healthy, well-trained, and an amazing family companion.",
      rating: 5,
      dogName: "Maximus"
    },
    {
      id: 2,
      name: "David Ochieng",
      location: "Mombasa, Kenya",
      text: "The training services at Kirangi Dog Academy are top-notch. They transformed our German Shepherd into a well-behaved, protective, and loving family member. Highly recommend their expertise!",
      rating: 5,
      dogName: "Luna"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      location: "Kisumu, Kenya",
      text: "Professional, knowledgeable, and truly caring. The team at Kirangi Dogs helped us find the perfect puppy for our family. The health guarantees and ongoing support have been invaluable.",
      rating: 5,
      dogName: "Rex"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families across Kenya 
            are saying about their experience with Kirangi Dogs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="bg-card border-0 shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>
              
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-primary font-medium">
                        Dog: {testimonial.dogName}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Join Our Happy Family
            </h3>
            <p className="text-muted-foreground mb-6">
              Over 150+ families across Kenya have trusted us with their canine companions. 
              Experience the Kirangi Dogs difference for yourself.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">150+</div>
                <div>Happy Families</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">15+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-primary">98%</div>
                <div>Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;