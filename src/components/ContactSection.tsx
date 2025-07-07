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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
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
      primary: "kirangidogs@gmail.com",
      secondary: "We reply within 24 hours",
      action: "mailto:kirangidogs@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      primary: "Kenya",
      secondary: "Serving nationwide",
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect companion? We're here to help you every step of the way. 
            Contact us today to learn more about our available puppies and services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-8">
              Let's Connect
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`bg-card border-0 shadow-card hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 ${
                  info.action ? 'cursor-pointer' : ''
                }`}
                onClick={() => info.action && window.open(info.action)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary rounded-full">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="font-medium text-primary mb-1">
                        {info.primary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.secondary}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-lg font-semibold shadow-warm"
                onClick={() => window.open('tel:+254785535569')}
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Now: +254-785-535-569
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full text-lg font-semibold"
                onClick={() => window.open('https://wa.me/254785535569', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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

        {/* Newsletter Subscription */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground border-0 shadow-warm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                Stay Updated
              </h3>
              <p className="mb-6 opacity-90">
                Subscribe to receive updates about available puppies, training tips, and kennel news.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-full"
                />
                <Button 
                  variant="outline" 
                  className="bg-white text-primary hover:bg-white/90 border-white rounded-full px-6"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;