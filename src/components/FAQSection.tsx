import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What dog breeds do you specialize in at Kirangi Dogs Kennel?",
      answer: "We specialize in three premium breeds: Black Russian Terriers, German Shepherds, and English Springer Spaniels. All our dogs come from world-class bloodlines and are registered with the East Africa Kennel Club."
    },
    {
      question: "Are your puppies registered and certified?",
      answer: "Yes, all our puppies come with full registration from the East Africa Kennel Club, complete pedigree documentation, and health certifications. We maintain the highest breeding standards in Kenya."
    },
    {
      question: "Do you provide training services for dogs?",
      answer: "Absolutely! Our Kirangi Dog Academy offers comprehensive training including functional obedience, protection work, dog sports preparation, scent work training, and medical assistance dog training."
    },
    {
      question: "What after-sale services do you provide?",
      answer: "We provide comprehensive after-sale services including ongoing support, training advice, health guidance, and assistance with any questions about your dog's development and care."
    },
    {
      question: "Do you offer K9 security services in Kenya?",
      answer: "Yes, we provide professional K9 security services including event security, personal protection, and immediate deployment services across Kenya and East Africa."
    },
    {
      question: "How can I contact Kirangi Dogs Kennel?",
      answer: "You can reach us at +254-785-535-569 for immediate assistance. We serve clients across Kenya and East Africa with our premium dog breeding and training services."
    },
    {
      question: "What makes your breeding program special?",
      answer: "Our breeding program focuses on champion-grade dogs from world-class bloodlines. We emphasize health, temperament, and conformation to breed standards, ensuring each puppy meets the highest quality standards."
    },
    {
      question: "Do you ship puppies across East Africa?",
      answer: "Yes, we can arrange safe transportation for our puppies across East Africa. We ensure proper documentation and health certificates for interstate and international shipping."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="faq" className="py-20 bg-gradient-to-br from-muted/30 via-background to-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our premium dog breeding services, 
              training programs, and K9 security services in Kenya.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;