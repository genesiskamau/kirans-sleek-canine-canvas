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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-teal-500/20 p-12 shadow-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Thank You!
            </h1>
            
            <p className="text-xl text-slate-300 mb-6">
              Your puppy reservation request has been received successfully.
            </p>
            
            <div className="bg-slate-900/50 rounded-2xl p-6 mb-8 border border-teal-500/10">
              <p className="text-slate-300 leading-relaxed">
                We're excited about your interest in our Black Russian Terrier puppies! 
                Our team will review your request and contact you within <span className="text-teal-400 font-semibold">24-48 hours</span> with 
                more information about the December litter, pricing details, and the next steps in the reservation process.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-slate-400">
                A confirmation email has been sent to <span className="text-teal-400 font-semibold">{formData.email}</span>
              </p>
              <p className="text-slate-400 text-sm">
                Questions? Call us at <a href="tel:+254785535569" className="text-teal-400 hover:text-teal-300 underline">+254-785-535-569</a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-full px-8 font-semibold shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-teal-500/30 text-teal-400 hover:bg-teal-500/10 rounded-full px-8 font-semibold"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full mb-6 animate-pulse">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reserve Your Black Russian Terrier Puppy
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We're expecting our next litter of Black Russian Terrier puppies in <span className="text-teal-400 font-semibold">December</span>! 
              Please fill in your details below to reserve a spot or ask any questions.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-teal-500/20 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-semibold text-lg">
                Your Name <span className="text-teal-400">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-semibold text-lg">
                Phone Number <span className="text-teal-400">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 xxx xxx xxx"
                required
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-semibold text-lg">
                Email Address <span className="text-teal-400">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl"
              />
            </div>

            {/* Preferred Sex */}
            <div className="space-y-2">
              <Label htmlFor="preferred_sex" className="text-white font-semibold text-lg">
                Preferred Puppy Sex <span className="text-teal-400">*</span>
              </Label>
              <select
                id="preferred_sex"
                name="preferred_sex"
                value={formData.preferred_sex}
                onChange={handleChange}
                required
                className="w-full h-12 bg-slate-900/50 border border-slate-700 text-white rounded-xl px-4 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              >
                <option value="Either">Either (No Preference)</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-white font-semibold text-lg">
                Additional Enquiries or Notes
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Tell us about any specific requirements, questions, or additional information..."
                rows={5}
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full h-14 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
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
            <p className="text-sm text-slate-400 text-center pt-2">
              Your information will be kept confidential and used only to process your puppy reservation request.
            </p>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 mb-2">Prefer to speak with us directly?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+254785535569" className="text-teal-400 hover:text-teal-300 transition-colors">
              📞 +254-785-535-569
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:kirangidogs@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">
              ✉️ kirangidogs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyForm;
