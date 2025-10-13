import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Heart, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const PuppyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferred_sex: 'Either',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://fqcsnlghwugkkwsegpsb.supabase.co/functions/v1/submit-puppy-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Booking Submitted!",
          description: "We'll contact you within 24-48 hours with more details.",
        });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-background via-muted to-card flex items-center justify-center px-4 overflow-hidden">
        {/* Luxury mesh background */}
        <div className="absolute inset-0 mesh-luxury opacity-40"></div>
        
        {/* Floating luxury elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-2xl w-full text-center animate-fade-in">
          <div className="glass-luxury backdrop-blur-2xl rounded-3xl metallic-border p-12 shadow-platinum">
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-gold">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-luxury text-gold mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl text-white/90 mb-6 font-premium">
              Your puppy reservation request has been received successfully.
            </p>
            
            <div className="bg-card/30 rounded-2xl p-6 mb-8 border metallic-border">
              <p className="text-white/80 leading-relaxed font-premium">
                We're excited about your interest in our Black Russian Terrier puppies! 
                Our team will review your request and contact you within <span className="text-gold font-semibold">24-48 hours</span> with 
                more information about the December litter, pricing details, and the next steps in the reservation process.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-white/70 font-premium">
                A confirmation email has been sent to <span className="text-gold font-semibold">{formData.email}</span>
              </p>
              <p className="text-white/70 text-sm font-premium">
                Questions? Call us at <a href="tel:+254785535569" className="text-gold hover:text-gold/80 underline">+254-785-535-569</a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-gradient-gold hover:scale-105 text-primary rounded-full px-8 font-bold shadow-gold hover:shadow-2xl transition-all duration-700 font-premium"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="glass-luxury text-white hover:bg-white/10 rounded-full px-8 font-bold backdrop-blur-2xl hover:scale-105 transition-all duration-700 font-premium"
                onClick={() => window.open('https://wa.me/254785535569', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted to-card py-12 px-4 overflow-hidden">
      {/* Luxury mesh background */}
      <div className="absolute inset-0 mesh-luxury opacity-40"></div>
      
      {/* Floating luxury elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-platinum rounded-full opacity-20 animate-luxury-float animation-delay-500 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-6 font-premium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-full mb-6 animate-royal-pulse shadow-gold">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-luxury text-gold mb-4">
              Reserve Your Black Russian Terrier Puppy
            </h1>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-premium">
              We're expecting our next litter of Black Russian Terrier puppies in <span className="text-gold font-semibold">December</span>! 
              Please fill in your details below to reserve a spot or ask any questions.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-luxury backdrop-blur-2xl rounded-3xl metallic-border p-8 md:p-12 shadow-platinum">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-semibold text-lg font-premium">
                Your Name <span className="text-gold">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="h-12 bg-card/30 border-muted text-white placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl font-premium"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-semibold text-lg font-premium">
                Phone Number <span className="text-gold">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 xxx xxx xxx"
                required
                className="h-12 bg-card/30 border-muted text-white placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl font-premium"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-semibold text-lg font-premium">
                Email Address <span className="text-gold">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="h-12 bg-card/30 border-muted text-white placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl font-premium"
              />
            </div>

            {/* Preferred Sex */}
            <div className="space-y-2">
              <Label htmlFor="preferred_sex" className="text-white font-semibold text-lg font-premium">
                Preferred Puppy Sex <span className="text-gold">*</span>
              </Label>
              <select
                id="preferred_sex"
                name="preferred_sex"
                value={formData.preferred_sex}
                onChange={handleChange}
                required
                className="w-full h-12 bg-card/30 border border-muted text-white rounded-xl px-4 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-premium"
              >
                <option value="Either">Either (No Preference)</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-white font-semibold text-lg font-premium">
                Additional Enquiries or Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about any specific requirements, questions, or additional information..."
                rows={5}
                className="bg-card/30 border-muted text-white placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 rounded-xl resize-none font-premium"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-14 bg-gradient-gold hover:scale-105 text-primary rounded-xl text-lg font-bold shadow-gold hover:shadow-2xl transition-all duration-700 disabled:opacity-50 disabled:cursor-not-allowed group font-premium"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Submit Reservation Request
                  </>
                )}
              </Button>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-white/70 text-center pt-2 font-premium">
              Your information will be kept confidential and used only to process your puppy reservation request.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-white/70 mb-2 font-premium">Prefer to speak with us directly?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+254785535569" className="text-gold hover:text-gold/80 transition-colors font-premium">
              📞 +254-785-535-569
            </a>
            <span className="text-muted">|</span>
            <a href="mailto:kirangidogs@gmail.com" className="text-gold hover:text-gold/80 transition-colors font-premium">
              ✉️ kirangidogs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyForm;
