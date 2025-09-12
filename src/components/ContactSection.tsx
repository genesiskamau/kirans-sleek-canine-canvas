import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, MessageSquare } from "lucide-react";
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
      title: "Call Us",
      primary: "+254-785-535-569",
      secondary: "Available Mon-Sat, 8AM-6PM",
      action: "tel:+254785535569",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/10"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "kirangidogs@gmail.com",
      secondary: "Quick response guaranteed",
      action: "mailto:kirangidogs@gmail.com",
      bgGradient: "from-blue-500/20 to-sky-500/20",
      iconBg: "bg-blue-500/10"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Embu, Kenya",
      secondary: "Schedule your appointment",
      action: null,
      bgGradient: "from-purple-500/20 to-violet-500/20",
      iconBg: "bg-purple-500/10"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon - Sat",
      secondary: "8:00 AM - 6:00 PM",
      action: null,
      bgGradient: "from-orange-500/20 to-amber-500/20",
      iconBg: "bg-orange-500/10"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl rounded-2xl border border-primary/20 px-8 py-4">
                <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Let's Connect
                </h2>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Ready to welcome a champion into your family? Our dedicated team is here to guide you through 
            every step of your journey with Kirangi Dogs.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 border border-border/50 backdrop-blur-xl bg-gradient-to-br ${info.bgGradient} hover:scale-105 transition-all duration-500 cursor-pointer ${info.action ? 'hover:shadow-2xl' : ''}`}
              onClick={() => info.action && window.open(info.action)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 ${info.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{info.title}</h3>
                <p className="font-semibold text-primary mb-1">{info.primary}</p>
                <p className="text-sm text-muted-foreground">{info.secondary}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-2xl border border-border/50 shadow-2xl">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-foreground">
                    Send Your Message
                  </h3>
                  <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Tell us about your perfect companion and we'll help make it happen
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <User className="w-4 h-4 text-primary" />
                      Full Name *
                    </label>
                    <div className="relative">
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 xxx xxx xxx"
                      className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="h-12 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ideal companion - breed preference, training needs, timeline, or any specific requirements..."
                    rows={6}
                    required
                    className="rounded-xl border-border/50 bg-background/50 backdrop-blur-sm focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="flex-1 h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    size="lg"
                    className="h-14 px-8 border-2 border-primary/30 text-primary hover:bg-primary hover:text-white rounded-xl font-semibold transition-all duration-300"
                    onClick={() => window.open('https://wa.me/254785535569', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact Strip */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-xl rounded-full px-8 py-4 border border-primary/20">
            <span className="text-sm font-medium text-muted-foreground">Need immediate assistance?</span>
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-semibold"
              onClick={() => window.open('tel:+254785535569')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;