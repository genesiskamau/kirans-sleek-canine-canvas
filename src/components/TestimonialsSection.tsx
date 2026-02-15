import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Kimani",
      location: "Nairobi, Kenya",
      text: "We got our Black Russian Terrier from Kirangi Dogs two years ago. The professionalism and care they showed throughout the process was exceptional. Our dog is well-trained and an amazing family companion.",
      rating: 5,
    },
    {
      id: 2,
      name: "David Ochieng",
      location: "Mombasa, Kenya",
      text: "The training services at Kirangi Dog Academy are top-notch. They transformed our German Shepherd into a well-behaved, protective, and loving family member. Highly recommend their expertise!",
      rating: 5,
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      location: "Kisumu, Kenya",
      text: "Professional, knowledgeable, and truly caring. The team at Kirangi Dogs helped us find the perfect puppy for our family. The ongoing support and quality assurance have been invaluable.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.id} className="bg-card border-border hover-lift">
              <CardContent className="p-8">
                <Quote className="w-6 h-6 text-secondary/40 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground text-sm font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
