import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://fqcsnlghwugkkwsegpsb.supabase.co/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send. Please contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">Get in Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Start Your Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+254785535569" className="flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover-lift">
              <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-foreground text-sm font-semibold">Call Us</p>
                <p className="text-muted-foreground text-xs">+254-785-535-569</p>
              </div>
            </a>
            <a href="mailto:kirangidogs@gmail.com" className="flex items-center gap-4 bg-background border border-border rounded-xl p-5 hover-lift">
              <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-foreground text-sm font-semibold">Email</p>
                <p className="text-muted-foreground text-xs">kirangidogs@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-background border border-border rounded-xl p-5">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <div>
                <p className="text-foreground text-sm font-semibold">Location</p>
                <p className="text-muted-foreground text-xs">Embu, Kenya</p>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 xxx xxx xxx"
                    className="bg-card border-border"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Your Inquiry *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs — service dog, protection dog, training, or breeding inquiry..."
                  rows={5}
                  required
                  className="bg-card border-border resize-none"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit"
                  className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 h-12 font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Inquiry
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 h-12"
                  onClick={() => window.open('https://wa.me/254785535569', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
