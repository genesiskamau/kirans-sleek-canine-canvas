import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
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
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your interest. We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+254-785-535-569",
      secondary: "Mon-Sat, 8AM-6PM",
      action: "tel:+254785535569"
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@kirangidogs.com",
      secondary: "We reply within 24 hours",
      action: "mailto:info@kirangidogs.com"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Embu, Kenya",
      secondary: "Visit by appointment only",
      action: null
    },
    {
      icon: Clock,
      title: "Visit Hours",
      primary: "By Appointment",
      secondary: "Monday - Saturday",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Connect With Us
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Begin your journey to finding the perfect canine companion. Our expert team is ready to guide you 
            through our breeding programs, available puppies, and specialized training services.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 text-center">
                Reach Out Today
              </h3>
              <p className="text-muted-foreground text-center mb-6">Multiple ways to connect with our team</p>
            
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`group p-4 bg-card/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 ${
                    info.action ? 'cursor-pointer hover:bg-primary/5' : ''
                  }`}
                  onClick={() => info.action && window.open(info.action)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm">
                        {info.title}
                      </h4>
                      <p className="font-semibold text-primary text-sm truncate">
                        {info.primary}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {info.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
            {/* Quick Actions */}
            <div className="space-y-3 mt-6">
              <Button 
                size="sm" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-warm text-sm"
                onClick={() => window.open('tel:+254785535569')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold text-sm"
                onClick={() => window.open('https://wa.me/254785535569', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254..."
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about what you're looking for - breed preference, training needs, timeline, etc."
                      rows={5}
                      required
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;