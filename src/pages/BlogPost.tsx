import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const IconComponent = post.icon;

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, idx) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={idx} className="font-luxury text-2xl text-gold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
      } else if (paragraph.startsWith('### ')) {
        return <h3 key={idx} className="font-luxury text-xl text-gold/90 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
      } else if (paragraph.startsWith('#### ')) {
        return <h4 key={idx} className="font-premium text-lg text-gold/80 mt-4 mb-2 font-semibold">{paragraph.replace('#### ', '')}</h4>;
      } else if (paragraph.startsWith('- **')) {
        const match = paragraph.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          return (
            <div key={idx} className="flex gap-2 ml-4">
              <span className="text-gold">•</span>
              <p><strong className="text-gold">{match[1]}:</strong> {match[2]}</p>
            </div>
          );
        }
      } else if (paragraph.startsWith('- ')) {
        return (
          <div key={idx} className="flex gap-2 ml-4">
            <span className="text-gold">•</span>
            <p>{paragraph.replace('- ', '')}</p>
          </div>
        );
      } else if (/^\d+\.\s/.test(paragraph)) {
        const num = paragraph.match(/^(\d+)\.\s/)?.[1];
        const content = paragraph.replace(/^\d+\.\s/, '');
        const match = content.match(/\*\*(.+?)\*\*:?\s*(.*)/);
        if (match) {
          return (
            <div key={idx} className="flex gap-3 ml-4">
              <span className="text-gold font-bold">{num}.</span>
              <p><strong className="text-gold">{match[1]}:</strong> {match[2]}</p>
            </div>
          );
        }
        return (
          <div key={idx} className="flex gap-3 ml-4">
            <span className="text-gold font-bold">{num}.</span>
            <p>{content}</p>
          </div>
        );
      } else if (paragraph.trim()) {
        return <p key={idx}>{paragraph}</p>;
      }
      return null;
    });
  };

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
          { label: "Blog", href: "/blog" },
          { label: post.title, isCurrentPage: true },
        ]}
      />

      <Navigation />

      <section className="py-32 relative z-10">
        <div className="absolute inset-0 mesh-luxury opacity-30"></div>

        <div className="container mx-auto px-6 relative z-10">
          <Link to="/blog">
            <Button
              variant="outline"
              className="mb-8 glass-luxury text-white hover:bg-white/10 backdrop-blur-2xl font-premium border-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <article className="max-w-4xl mx-auto animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-gold rounded-3xl blur-xl opacity-20"></div>
              <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border overflow-hidden shadow-platinum bg-black/40 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-gold rounded-full">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="font-premium text-sm border-gold/50 text-gold">
                    {post.category}
                  </Badge>
                </div>

                <h1 className="font-luxury text-3xl md:text-5xl text-white font-bold mb-3">
                  {post.title}
                </h1>
                <p className="font-premium text-white/70 text-lg mb-6 italic">
                  {post.subtitle}
                </p>

                <div className="flex items-center gap-6 text-sm text-white/60 mb-10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-premium">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-premium">{post.readTime}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 prose prose-invert prose-lg max-w-none">
                  <div className="font-premium text-white/90 leading-relaxed space-y-6">
                    {renderContent(post.content)}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
