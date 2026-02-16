import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-dog.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-royal opacity-80"></div>
      </div>

      <SEOBreadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", isCurrentPage: true },
        ]}
      />

      <Navigation />

      <section className="py-32 relative z-10">
        <div className="absolute inset-0 mesh-luxury opacity-30"></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/">
            <Button
              variant="outline"
              className="mb-8 glass-luxury text-white hover:bg-white/10 backdrop-blur-2xl font-premium border-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl"></div>
              <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border shadow-platinum p-12 mb-8 bg-black/30">
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

                <p className="font-premium text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed italic px-4">
                  "Insights, education, and stories from the world of professional dog breeding, training, and canine-assisted therapy"
                </p>
              </div>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, index) => {
              const IconComponent = post.icon;
              const excerpt = post.content
                .split('\n')
                .find((line) => line.trim() && !line.startsWith('#'))
                ?.trim()
                .slice(0, 160);

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group animate-fade-in block"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    <div className="absolute -inset-2 bg-gradient-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative h-full glass-luxury backdrop-blur-xl rounded-3xl border metallic-border overflow-hidden shadow-platinum bg-black/40 p-8 flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-gold rounded-full">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="font-premium text-xs border-gold/50 text-gold">
                          {post.category}
                        </Badge>
                      </div>

                      <h2 className="font-luxury text-xl md:text-2xl text-white font-bold mb-2 group-hover:text-gold transition-colors">
                        {post.title}
                      </h2>
                      <p className="font-premium text-white/60 text-sm mb-4 italic">
                        {post.subtitle}
                      </p>

                      {excerpt && (
                        <p className="font-premium text-white/70 text-sm leading-relaxed mb-6 flex-1">
                          {excerpt}…
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4 text-xs text-white/50">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span className="font-premium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span className="font-premium">{post.readTime}</span>
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-gold text-sm font-premium group-hover:gap-2 transition-all">
                          Read <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
