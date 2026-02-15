import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of service dogs does Kirangi Dogs train?",
      answer: "We train service and assistance dogs for PTSD, autism spectrum conditions, anxiety disorders, and other mental health needs. Each dog is individually trained to match the specific requirements of its future handler."
    },
    {
      question: "How long does protection dog training take?",
      answer: "Protection dog training typically takes 4-8 months depending on the dog's age, temperament, and the level of training required. We provide regular progress updates throughout the process."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes. We've successfully trained and placed dogs with international clients, including individuals in the United States. We handle all logistics and provide ongoing remote support after placement."
    },
    {
      question: "What breeds do you specialize in?",
      answer: "We specialize in Black Russian Terriers, German Shepherds, and English Springer Spaniels. All our breeding dogs come from champion bloodlines and are registered with the East Africa Kennel Club."
    },
    {
      question: "What is your selection process for clients?",
      answer: "We conduct a thorough assessment to ensure the right match between dog and client. This includes understanding your lifestyle, needs, expectations, and commitment level. Not every applicant is accepted — we prioritize quality placements."
    },
    {
      question: "Do you provide post-placement support?",
      answer: "Absolutely. Every placement comes with comprehensive handler training and continued support. We remain available for guidance, follow-up training, and any questions throughout the dog's life."
    },
    {
      question: "How can I apply for a service or protection dog?",
      answer: "Contact us via WhatsApp at +254-785-535-569 or email kirangidogs@gmail.com to begin the application process. We'll schedule an initial consultation to discuss your needs."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] text-secondary uppercase mb-4">FAQ</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5 text-sm font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
