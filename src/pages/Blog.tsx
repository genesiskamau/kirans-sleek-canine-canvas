import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ExternalLink, BookOpen, Dog, Brain, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Assistance Dogs for ADHD and Autism Spectrum Disorder (ASD)",
      subtitle: "An Occupational Therapist's Perspective for OTs, Parents, Teachers & Caregivers",
      date: "September 09, 2025",
      category: "Assistance Dogs",
      icon: Heart,
      excerpt: "Discover how assistance dogs can provide life-changing support for individuals with ADHD and Autism Spectrum Disorder. This comprehensive guide explores the therapeutic benefits, training requirements, and practical considerations for families considering an assistance dog.",
      externalUrl: "https://kirangidogswebsite.blogspot.com/2025/09/assistance-dogs-for-adhd-and-autism.html",
      readTime: "12 min read",
      featured: true
    },
    {
      id: 2,
      title: "Understanding ADHD Through the Eye of an Occupational Therapist",
      subtitle: "With Integrated Canine Assistance",
      date: "August 12, 2025",
      category: "ADHD Awareness",
      icon: Brain,
      excerpt: "An in-depth exploration of ADHD from an occupational therapy perspective, highlighting how canine-assisted interventions can complement traditional therapeutic approaches for children and adults with attention disorders.",
      externalUrl: "https://kirangidogswebsite.blogspot.com/2025/08/understanding-adhd-through-eye-of.html",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 3,
      title: "ADHD Awareness Part 2",
      subtitle: "Continuing the Conversation",
      date: "November 2024",
      category: "ADHD Awareness",
      icon: Brain,
      excerpt: "Part two of our ADHD awareness series, diving deeper into practical strategies and the role that trained assistance dogs can play in supporting individuals with ADHD in their daily routines.",
      externalUrl: "https://kirangidogswebsite.blogspot.com/2024/11/adhd-awareness-part-2.html",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "ADHD Awareness",
      subtitle: "Understanding Attention Deficit Hyperactivity Disorder",
      date: "September 2024",
      category: "ADHD Awareness",
      icon: Brain,
      excerpt: "An introduction to ADHD awareness, exploring the symptoms, challenges, and how animal-assisted therapy, particularly with dogs, can provide meaningful support for those affected.",
      externalUrl: "https://kirangidogswebsite.blogspot.com/2024/09/a.html",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "History of the Black Russian Terrier",
      subtitle: "From Military Origins to Beloved Companion",
      date: "July 09, 2024",
      category: "Breed History",
      icon: Dog,
      excerpt: "Explore the fascinating history of the Black Russian Terrier, a breed developed by the Soviet Red Star Kennel in the 1940s-1950s. Learn how Giant Schnauzers, Rottweilers, and Airedale Terriers were crossed to create this magnificent guardian breed.",
      externalUrl: "https://kirangidogswebsite.blogspot.com/2024/07/the-black-russian-terrier.html",
      readTime: "15 min read",
      featured: true
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-card">
      <SEOBreadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]}
      />
      
      <Navigation />
      
      <section className="py-32 relative overflow-hidden">
        {/* Luxury mesh background */}
        <div className="absolute inset-0 mesh-luxury opacity-40"></div>
        
        {/* Sophisticated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-platinum rounded-full opacity-20 animate-luxury-float animation-delay-500 blur-xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <Link to="/">
            <Button 
              variant="outline" 
              className="mb-8 glass-luxury text-foreground hover:bg-white/10 backdrop-blur-2xl font-premium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Elegant Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
              <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border shadow-platinum p-12 mb-8">
                <div className="flex items-center justify-center mb-6 gap-4">
                  <BookOpen className="w-10 h-10 text-gold" />
                  <h1 className="font-luxury text-4xl sm:text-6xl md:text-7xl font-bold text-gold">
                    Our Blog
                  </h1>
                </div>
                
                <div className="flex items-center justify-center mb-8">
                  <div className="h-px bg-gradient-gold flex-1 max-w-xs"></div>
                  <div className="text-2xl text-gold mx-4">◊</div>
                  <div className="h-px bg-gradient-gold flex-1 max-w-xs"></div>
                </div>

                <p className="font-premium text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed italic px-4">
                  "Insights, education, and stories from the world of professional dog breeding, training, and canine-assisted therapy"
                </p>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="font-luxury text-3xl text-gold mb-8 text-center">Featured Articles</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredPosts.map((post, index) => {
                  const IconComponent = post.icon;
                  return (
                    <a
                      key={post.id}
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="relative transform transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                        
                        {/* Main Card */}
                        <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border overflow-hidden shadow-platinum group-hover:shadow-gold transition-all duration-700 p-8">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className="bg-gradient-gold text-primary font-premium">
                              Featured
                            </Badge>
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors" />
                          </div>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-gradient-gold rounded-full">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <Badge variant="outline" className="font-premium text-sm">
                              {post.category}
                            </Badge>
                          </div>
                          
                          <h3 className="font-luxury text-2xl text-foreground font-bold mb-2 group-hover:text-gold transition-colors">
                            {post.title}
                          </h3>
                          <p className="font-premium text-muted-foreground text-sm mb-4 italic">
                            {post.subtitle}
                          </p>
                          
                          <p className="font-premium text-muted-foreground mb-6 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="font-premium">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span className="font-premium">{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="max-w-6xl mx-auto">
            <h2 className="font-luxury text-3xl text-gold mb-8 text-center">All Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => {
                const IconComponent = post.icon;
                return (
                  <a
                    key={post.id}
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block animate-fade-in"
                    style={{ animationDelay: `${(index + featuredPosts.length) * 100}ms` }}
                  >
                    <div className="relative transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2">
                      {/* Glow Effect */}
                      <div className="absolute -inset-2 bg-gradient-gold rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                      
                      {/* Main Card */}
                      <div className="relative glass-luxury backdrop-blur-xl rounded-2xl border metallic-border overflow-hidden shadow-lg group-hover:shadow-gold transition-all duration-500 p-6 h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <IconComponent className="w-5 h-5 text-gold" />
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                        </div>
                        
                        <Badge variant="outline" className="font-premium text-xs mb-3">
                          {post.category}
                        </Badge>
                        
                        <h3 className="font-luxury text-lg text-foreground font-bold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="font-premium text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border/30">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span className="font-premium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span className="font-premium">{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-luxury backdrop-blur-xl rounded-3xl border metallic-border p-12 max-w-3xl mx-auto">
              <h3 className="font-luxury text-2xl text-gold mb-4">Stay Updated</h3>
              <p className="font-premium text-muted-foreground mb-6">
                Follow our blog for the latest insights on dog breeding, training, and canine-assisted therapy.
              </p>
              <a
                href="https://kirangidogswebsite.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-gold text-primary font-premium hover:opacity-90 transition-opacity">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Visit Our Blog
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
