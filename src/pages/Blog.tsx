import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, BookOpen, Dog, Brain, Heart, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumb from "@/components/SEOBreadcrumb";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 0,
      title: "Choosing a Protection Dog: What Every Buyer Should Know",
      subtitle: "By Kirangi Dogs – Kenya's Premier Breeder and Trainer of Working-Line German Shepherds and Black Russian Terriers",
      date: "February 2025",
      category: "Protection Dogs",
      icon: Shield,
      readTime: "10 min read",
      content: `
When deciding to buy a protection dog, most people have their eyes fixed on coat color, markings or how cute the puppy looks. However, true protection is not about appearance – it's about temperament, nerve, stability, and working drives. At Kirangi Dogs, we keep on reminding our clients that a beautiful coat may please the eye, but only strong instincts can protect your family.

## Puppy or Mature, Trained Dog?

One dilemma people face when acquiring a dog for family or personal protection is whether to choose from a puppy or a mature trained dog. Here is what you need to know.

### Selecting a Puppy for Protection

Selecting a puppy allows you to raise and bond with your future protection partner from an early age. However, it requires time, patience and expert training to develop the puppy into a reliable, confident and functional protection dog.

### Advantages of Starting with a Puppy

- **Early Bonding:** Bonding entails building trust and attachment which strengthens loyalty and responsiveness later in training and handling.
- **Customized Training:** Training in obedience and protection can be tailor-made to meet your unique needs.
- **Environmental Adaptation:** It allows puppies to grow up naturally accustomed to your family, surroundings, and routines.
- **Lower Initial Costs:** Puppies cost less upfront compared to mature trained dogs.

### Disadvantages of Buying a Puppy

- **Unpredictability:** Not every puppy, even from the best working lines will mature into a top protection dog.
- **Time:** It takes about 18-24 months of consistent training before a dog becomes fully reliable in protection.
- **Higher Long-Term Costs:** You will need to either take the dog into a facility or bring a trainer for professional training for the dog to operate within its full potential.
- **Un-intended Outcomes:** Lack of proper understanding in handling and socialization can cause life-long behavioral issues.

TIP: Puppies are suitable for families or individuals who want to grow with their dog, enjoy training, and value long-term bonding.

## Selecting a Mature, Trained Dog

Mature, professionally trained dogs, which have acquired structured obedience and protection skills are an excellent choice for those who need immediate peace of mind.

### Advantages

- **Predictable Temperament:** You can readily see and know the dog's exact behavior, drive, and working ability.
- **Ready to Serve:** A trained dog is ready for immediate deployment in your home.
- **Professional Foundation:** Acquiring a dog guarantees stability, control, and reliability.
- **Time-Saving:** You skip the long period of puppyhood and training.

### Drawbacks

- **Higher Costs:** The training and skill development will reflect on the final price.
- **Longer Adjustment Period:** It takes longer for a mature dog to bond with the new family.
- **Limited Room for Customization:** With established behaviors and habits, the dog and the new owner will require more time for adaptation.

TIP: Best for families or individuals in need of immediate protection and proven working ability without investing time in training.

## What Really Matters: Drives or Looks

At Kirangi Dogs, our breeding and training focuses on working ability, nerve strength and character - not just coat color or physical appearance.

We evaluate every dog based on the following critical traits:

1. **Nerve Stability:** The dog must be calm under stress, loud environments and various kinds of distractions.
2. **Confidence:** Willingness to engage threats decisively.
3. **Protective Drive:** Instinct to defend.
4. **Trainability:** Eagerness to learn and cooperate.
5. **Recovery Time:** The dog must settle quickly after stimulation, distraction or sudden change in environments.

## How Kirangi Dogs Helps You Choose

Every client who visits Kirangi Dogs receives personalized assessment and guidance. We help you find the ideal dog based on:

- Your home environment (family, space, routine)
- Security needs and goals (personal, estate, or business protection)
- Your handling experience and comfort level
- Budget and desired time frame

After we assess your needs, we will recommend either a high-potential puppy or a professionally trained adult dog that is ready for immediate deployment.

At Kirangi Dogs, our mission is simply to match the right owner with the right dog, guaranteeing safety, companionship, and peace of mind.

Whatever your choice is: At Kirangi Dogs, every dog is not just a pet – it's a guardian, friend and a loyal partner in protection.

## Ready For the Journey?

Contact Kirangi Dogs today for a scheduled consultation or to book a dog. We'll help you select a dog based on character, capability, and purpose – not appearance.
      `
    },
    {
      id: 1,
      title: "Assistance Dogs for ADHD and Autism Spectrum Disorder (ASD)",
      subtitle: "An Occupational Therapist's Perspective for OTs, Parents, Teachers & Caregivers",
      date: "September 09, 2025",
      category: "Assistance Dogs",
      icon: Heart,
      readTime: "15 min read",
      content: `
## Understanding Autism Assistance Dogs

Autism assistance dogs play a vital role in the lives of individuals with autism spectrum disorder (ASD). These specialized service dogs are not just pets but are trained to perform specific tasks and provide emotional support to their owners.

### Role of Autism Service Dogs

An autism service dog is trained to offer emotional support and perform tasks that enhance the independence of people with autism. They provide companionship, emotional grounding, and can significantly reduce anxiety. These dogs assist in improving social interactions and overall well-being, making them a valuable companion for individuals with ASD.

Autism service dogs are also trained to facilitate more successful social outings by providing a comforting presence. They offer tactile support and are trained to look for potential triggers in social settings, helping to prevent overwhelming situations. Additionally, these dogs can recognize anxiety triggers and divert their owners from such environments.

During panic attacks or high anxiety moments, autism service dogs can provide tactile distraction and emotional support, helping to calm their owner and reduce the effects of the panic attack. This makes them a crucial part of the support system for individuals with autism.

### Impact on Individuals with Autism

Autism assistance dogs have a profound impact on the lives of individuals with autism. The companionship and support they provide can lead to significant improvements in the individual's emotional stability and social interactions.

By providing a constant source of comfort, these dogs can help reduce the anxiety that individuals with autism often experience. They help create a sense of routine and predictability, which can be very beneficial for people with autism who often struggle with unexpected changes.

The presence of an autism assistance dog can also promote social interaction. When out in public, the dog can often act as a social bridge, encouraging others to approach and interact. This can lead to improved communication skills for the individual with autism.

## Benefits of Autism Service Dogs

### Emotional Support and Companionship

One of the most significant benefits of an autism assistance dog is the emotional support and companionship they offer. These dogs provide a constant, comforting presence, helping to reduce anxiety and improve overall well-being. They serve as a source of comfort, helping to ground individuals with ASD emotionally.

### Social Interaction and Communication Skills

Autism service dogs can facilitate improved social interactions for individuals with ASD. Their presence often acts as an ice-breaker during social outings, making interactions with others easier and less stressful. This can lead to increased confidence in social situations, fostering better communication skills.

### Sensory Regulation and Calming Effects

Autism service dogs can also provide sensory regulation and have calming effects on individuals with ASD. These dogs can recognize anxiety triggers and divert their owners from overwhelming environments, providing tactile distraction and emotional support during panic attacks.

## Safety and Behavioral Support

### Preventing Elopement and Wandering

A foremost concern for many parents of autistic children is the potential for their child to elope or wander, putting themselves in danger. Autism Assistance Dogs are trained to maintain a close proximity to the child at all times, creating a physical barrier between the child and potential hazards.

### Addressing Meltdowns and Anxiety

AADs are trained to disrupt potentially harmful repetitive or self-stimulating behaviors, often seen in individuals with autism. They provide a modified form of pressure touch therapy, a technique practiced by occupational therapists to help reduce levels of arousal and anxiety.

During periods of heightened stress, such as a meltdown, the presence of an AAD can have a calming effect on the child. The dog's steady demeanor and comforting touch can help to soothe the child, reducing the intensity and duration of the meltdown.

## Popular Breeds for Autism Support

Several dog breeds are known for their suitability as autism assistance dogs:

- **Golden Retrievers:** Known for their happy-go-lucky personality and calm temperament
- **Labradoodles and Goldendoodles:** Popular choices due to their allergy-friendly characteristics
- **Collies:** Highly aware of human emotions, mild-mannered, gentle, and easy to train
- **Poodles:** Keen intelligence and hypoallergenic tendencies, able to perform complex tasks
      `
    },
    {
      id: 2,
      title: "Understanding ADHD Through the Eye of an Occupational Therapist",
      subtitle: "With Integrated Canine Assistance",
      date: "August 12, 2025",
      category: "ADHD Awareness",
      icon: Brain,
      readTime: "12 min read",
      content: `
## Exploring Canine-Assisted Interactions for Children with ADHD

Living with attention-deficit hyperactivity disorder (ADHD) can be challenging, especially for children. While medication and behavioral therapies are common treatments, more families are looking into complementary options like animal-assisted interventions (AAIs). But do these methods really make a difference?

### The Study in a Nutshell

Research teams have investigated how canine-assisted intervention (CAI) combined with cognitive behavioral therapy (CBT) influences social interactions among children with ADHD. Studies have involved children who participated in 12-week programs, randomly assigned to two groups: one interacting with live therapy dogs, and the other with stuffed toy dogs.

### How It Was Done

Researchers observed and coded video footage from key sessions to see how children behaved. They used specialized behavior coding systems to record social interactions with adults, peers, and the animals (real or stuffed).

### Key Findings

1. **Human Interaction Boost**: Children in the live-dog group showed more significant improvement in human-directed social interactions over time compared to those with stuffed dogs.

2. **Adult Engagement**: Interactions with adults grew notably in the presence of live dogs. Peer interactions increased in both groups but were not significantly different between them.

3. **Animal Interaction Similarity**: Surprisingly, the frequency of interactions with the live dogs was similar to those with stuffed dogs, suggesting that merely the theme of dogs can prompt engagement.

### What Does This Mean?

The findings hint that while both live and toy dogs encourage interaction, live animals might enhance social connection with adults more effectively. This suggests the presence of a real animal could trigger unique social benefits not seen with toys.

### Why It Matters

Understanding how AAIs work helps refine these interventions, making them more effective for children who might struggle with traditional methods. If your family or community is considering alternative ways to support children with ADHD, canine-assisted therapy might be worth exploring.

## Benefits of Canine-Assisted Therapy for ADHD

### Improved Focus and Attention

The presence of a therapy dog can help children with ADHD maintain focus during therapeutic activities. The calming influence of the animal helps reduce hyperactivity and impulsivity.

### Enhanced Social Skills

Working with therapy dogs provides opportunities for children to practice social skills in a low-pressure environment. The dog serves as a non-judgmental partner for interaction.

### Emotional Regulation

Dogs can help children learn to regulate their emotions. The responsibility of caring for or working with an animal teaches patience and self-control.

### Reduced Anxiety

Many children with ADHD also experience anxiety. The calming presence of a therapy dog can help reduce stress and create a more relaxed learning environment.
      `
    },
    {
      id: 3,
      title: "ADHD Awareness Part 2",
      subtitle: "Continuing the Conversation on Canine Support",
      date: "November 2024",
      category: "ADHD Awareness",
      icon: Brain,
      readTime: "10 min read",
      content: `
## Understanding ADHD and Animal-Assisted Support

ADHD (Attention Deficit Hyperactivity Disorder) affects millions of people worldwide, impacting their ability to focus, control impulses, and manage daily activities. This continuation of our ADHD awareness series explores how trained assistance dogs can support individuals with ADHD.

### The Role of Structure and Routine

One of the key challenges for individuals with ADHD is maintaining consistent routines. Assistance dogs naturally require regular feeding, walking, and care schedules, which can help establish beneficial routines for their handlers.

### Benefits of Dog Ownership for ADHD

- **Physical Activity**: Dogs need regular exercise, encouraging their owners to be more physically active
- **Social Connections**: Walking a dog creates opportunities for social interaction with other pet owners
- **Responsibility**: Caring for a dog teaches accountability and time management
- **Emotional Support**: The unconditional love of a dog provides comfort during challenging times

### How Dogs Help with ADHD Symptoms

#### Focus and Attention

The presence of a calm, trained dog can help individuals with ADHD maintain focus during tasks. The dog provides a grounding presence that reduces distractibility.

#### Impulse Control

Working with a dog requires patience and consistent behavior, which can help individuals practice impulse control in a rewarding context.

#### Time Management

Dogs thrive on routine, and their needs (feeding, walks, playtime) create natural time markers throughout the day, helping with time blindness often experienced by those with ADHD.

### Practical Tips for ADHD and Dog Ownership

1. **Start with a trained dog** if possible, to reduce the initial training demands
2. **Create a care schedule** and use reminders for feeding and walking times
3. **Involve the dog in daily activities** to create companionship throughout the day
4. **Consider professional training** for specific support tasks

### The Science Behind It

Research shows that interacting with dogs can increase oxytocin levels while decreasing cortisol, the stress hormone. This biological response helps create a calmer state that is beneficial for managing ADHD symptoms.
      `
    },
    {
      id: 4,
      title: "ADHD Awareness",
      subtitle: "Understanding Attention Deficit Hyperactivity Disorder",
      date: "September 2024",
      category: "ADHD Awareness",
      icon: Brain,
      readTime: "8 min read",
      content: `
## What is ADHD?

ADHD stands for Attention Deficit Hyperactivity Disorder. It is a neurodevelopmental disorder that affects both children and adults, characterized by patterns of inattention, hyperactivity, and impulsivity that interfere with functioning and development.

### Types of ADHD

There are three main types of ADHD:

1. **Predominantly Inattentive Presentation**: Difficulty organizing or finishing tasks, following instructions, or paying attention to details
2. **Predominantly Hyperactive-Impulsive Presentation**: Fidgeting, talking excessively, difficulty staying seated, and impulsive decision-making
3. **Combined Presentation**: A combination of inattentive and hyperactive-impulsive symptoms

### Common Signs and Symptoms

#### In Children:
- Difficulty paying attention in school or during activities
- Frequent careless mistakes
- Trouble following instructions
- Difficulty organizing tasks
- Easily distracted
- Forgetful in daily activities
- Fidgeting or squirming
- Difficulty playing quietly
- Talking excessively
- Interrupting others

#### In Adults:
- Chronic lateness and forgetfulness
- Anxiety and low self-esteem
- Problems at work
- Trouble controlling anger
- Impulsiveness
- Substance abuse or addiction
- Unorganized
- Procrastination
- Easily frustrated
- Chronic boredom

### The Role of Animal-Assisted Therapy

Animal-assisted therapy, particularly with dogs, has shown promising results in supporting individuals with ADHD:

- **Reduced Anxiety**: The calming presence of animals helps reduce stress and anxiety
- **Improved Social Skills**: Animals provide non-judgmental companionship and opportunities for social interaction
- **Enhanced Focus**: Working with animals requires attention and can help improve concentration
- **Physical Activity**: Caring for pets encourages movement and exercise

### Getting Help

If you suspect you or someone you know has ADHD, it's important to seek professional evaluation. Treatment options may include:
- Behavioral therapy
- Medication
- Educational support
- Lifestyle modifications
- Animal-assisted interventions

ADHD is manageable with the right support and strategies. Awareness is the first step toward understanding and helping those affected.
      `
    },
    {
      id: 5,
      title: "History of the Black Russian Terrier",
      subtitle: "From Military Origins to Beloved Companion",
      date: "July 09, 2024",
      category: "Breed History",
      icon: Dog,
      readTime: "15 min read",
      content: `
## The Black Russian Terrier: A Soviet Superdog

The Black Russian Terrier (BRT) is a young breed with a deep and rich, although partially unknown genealogic history. As its name implies, the breed's country of origin is Russia. While considered a rare breed, the BRT has confidently stepped far beyond its native homeland to find passionate acceptance and a constantly growing presence around the globe.

### How It All Began

The Black Russian Terrier was developed in the early 1950s by the Russian military, specifically, the former Soviet Army's Red Star Kennel. Historical accountings of genealogic development are peppered with both facts and speculation.

This is due to the breed's military origins and limited access to classified information during and after the breed's very complex development over a period of years.

### What Does the Name Mean?

In Russia, the Black Russian Terrier has always been known as the Tchiorny Terrier. In the United States and other Western regions, the breed is called Black Russian Terrier or just BRT. In the UK and other regions, it is known as the Russian Black Terrier or RBT.

BRTs are also referred to as the Black Pearls of Russia and endearingly, just Blackies.

### It's Not Really a Terrier

The breed name suggests that the BRT is a terrier, but it is not a true terrier. The breed's creation is said to have involved approximately 17 different breeds. Foundation breeds most heavily used included:

- **Giant Schnauzer** (approximately 30%)
- **Airedale Terrier** (approximately 30%)
- **Rottweiler** (approximately 30%)
- **Newfoundland** and other breeds (approximately 10%)

Other breeds believed to have been included in the breeding program were the now-extinct Moscow Water Dog, as well as the Caucasian Ovcharka, East European Shepherd, Great Dane, German Shepherd Dog and other working breeds.

### Why Was the Breed Created?

The Black Russian Terrier was borne of necessity. The purpose of the breeding program was to restore to the Soviet Army the purebred working, protection and guarding dogs that were decimated during World War II. Recognizing the heroic contributions of military dogs during the war, the Red Star Kennel set out to develop a breed that could exceed the value of previous canine soldiers for the military.

The imperative was to produce a breed that was:
- Imposing and confident
- Courageous and highly intelligent
- Devoted to its handler
- Highly trainable with a stable and balanced temperament
- Fit to serve, protect, guard and work in brutal climatic conditions

Working breed traits ultimately bred into the Black Russian Terrier also fostered the breed's use as cattle drivers, herders and sled dogs.

### The Development Process

Through a calculated and very scientific breeding program, the Red Star Kennel imported, studied, selected and bred what was believed to be superior stock from among the chosen foundation breeds. Over time, other breeds were introduced into the lines with the goals of:

- Adding and strengthening the military's desired traits
- Eliminating undesirable ones
- Retaining the best ancestral qualities

After years of strategic breeding practices and untold generations, the Black Russian Terrier bred true.

### From Military to Family Companion

Ultimately, the Red Star kennel made the BRT available to civilian dog breeders, where the breed's high potential was recognized for repurposing as:

- An intelligent, loyal, and gentle yet protective family companion
- A strong and versatile working breed
- An extremely attractive and viable competitor in the exhibition ring

Black Russian Terriers initially tracked across Russia, Central and Eastern Europe, and the Baltic States, and eventually arrived in Finland and Scandinavia before entering the kennels and homes of canine enthusiasts on nearly every major continent.

### Major Milestones in History

- **Early 1950s:** Breeding program established by the Soviet Army at Red Star Kennel
- **1957:** Red Star Kennel began making the BRT available to civilian breeders
- **1958:** First official breed standard published
- **1979:** Red Star Kennel officially approved a standard for the breed
- **1981:** Breed officially recognized by Russian authorities
- **1984:** Granted international acceptance from the FCI
- **Early 1990s:** First arrived in the United States
- **1992:** Renamed from "Black Terrier" to "Black Russian Terrier"
- **1993:** Black Russian Terrier Club of America established
- **2004:** American Kennel Club formally recognized the BRT as a member of the Working Group

### The Modern Black Russian Terrier

Today, the Black Russian Terrier continues to excel as both a working dog and a beloved family companion. Their intelligence, loyalty, and protective nature make them excellent guardians, while their gentle disposition with family members makes them wonderful household pets.

At Kirangi Dogs, we are proud to breed Black Russian Terriers that honor the breed's rich heritage while embodying the best qualities that make these dogs such exceptional companions.
      `
    }
  ];

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background image from hero section */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/hero-dog.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-royal opacity-80"></div>
      </div>
      
      <SEOBreadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" }
        ]}
      />
      
      <Navigation />
      
      <section className="py-32 relative z-10">
        {/* Luxury mesh background */}
        <div className="absolute inset-0 mesh-luxury opacity-30"></div>
        
        {/* Sophisticated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-gold rounded-full opacity-10 animate-luxury-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-15 animate-luxury-float animation-delay-1000 blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Back Button */}
          <Link to="/">
            <Button 
              variant="outline" 
              className="mb-8 glass-luxury text-white hover:bg-white/10 backdrop-blur-2xl font-premium border-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          {/* Elegant Header */}
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

          {/* Blog Posts */}
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => {
              const IconComponent = post.icon;
              const isExpanded = expandedPost === post.id;
              
              return (
                <article
                  key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-gold rounded-3xl blur-xl transition-opacity duration-500 ${isExpanded ? 'opacity-40' : 'opacity-0'}`}></div>
                    
                    {/* Main Card */}
                    <div className="relative glass-luxury backdrop-blur-xl rounded-3xl border metallic-border overflow-hidden shadow-platinum bg-black/40">
                      {/* Header - Always visible */}
                      <button
                        onClick={() => togglePost(post.id)}
                        className="w-full p-8 text-left hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="p-3 bg-gradient-gold rounded-full">
                                <IconComponent className="w-6 h-6 text-primary" />
                              </div>
                              <Badge variant="outline" className="font-premium text-sm border-gold/50 text-gold">
                                {post.category}
                              </Badge>
                            </div>
                            
                            <h2 className="font-luxury text-2xl md:text-3xl text-white font-bold mb-2">
                              {post.title}
                            </h2>
                            <p className="font-premium text-white/70 text-sm mb-4 italic">
                              {post.subtitle}
                            </p>
                            
                            <div className="flex items-center gap-6 text-sm text-white/60">
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
                          
                          <div className="p-2 bg-white/10 rounded-full">
                            {isExpanded ? (
                              <ChevronUp className="w-6 h-6 text-gold" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-gold" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {/* Content - Expandable */}
                      {isExpanded && (
                        <div className="px-8 pb-8 border-t border-white/10">
                          <div className="pt-8 prose prose-invert prose-lg max-w-none">
                            <div className="font-premium text-white/90 leading-relaxed space-y-6">
                              {post.content.split('\n').map((paragraph, idx) => {
                                if (paragraph.startsWith('## ')) {
                                  return (
                                    <h2 key={idx} className="font-luxury text-2xl text-gold mt-8 mb-4">
                                      {paragraph.replace('## ', '')}
                                    </h2>
                                  );
                                } else if (paragraph.startsWith('### ')) {
                                  return (
                                    <h3 key={idx} className="font-luxury text-xl text-gold/90 mt-6 mb-3">
                                      {paragraph.replace('### ', '')}
                                    </h3>
                                  );
                                } else if (paragraph.startsWith('#### ')) {
                                  return (
                                    <h4 key={idx} className="font-premium text-lg text-gold/80 mt-4 mb-2 font-semibold">
                                      {paragraph.replace('#### ', '')}
                                    </h4>
                                  );
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
                                } else if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ') || paragraph.startsWith('5. ')) {
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
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
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
