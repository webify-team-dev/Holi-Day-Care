import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a Meet & Greet and why is it required?",
      answer: "A Meet & Greet is a brief introductory session where we assess your dog's temperament and socialization skills. This ensures they'll be comfortable in our group setting and compatible with other dogs. It's required for all new clients to guarantee a safe, positive experience for every pup in our care. To schedule, simply call us at (802) 622-0474.",
    },
    {
      question: "What should I bring for boarding?",
      answer: "Please bring your dog's regular food (enough for their stay plus one extra day), any medications with clear instructions, and a favorite toy or blanket for comfort. We recommend bringing a familiar-smelling item to help them feel at home. All dogs must be up-to-date on vaccinations (Rabies, Distemper, Bordetella).",
    },
    {
      question: "How does the multi-dog discount work?",
      answer: "We offer $5 off per additional dog from the same household. Two dogs board for $75/night (instead of $80), three dogs for $110/night (instead of $120). For families with 4+ dogs, please call us for custom pricing. Discounts apply to boarding services only.",
    },
    {
      question: "What are your hours of operation?",
      answer: "Our daycare hours are 7:00 AM to 5:30 PM, Monday through Friday. This is your window for both drop-off and pick-up. For boarding pick-ups and drop-offs outside regular hours, please call ahead to make arrangements. We're here to accommodate your schedule whenever possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "We ask for at least 24 hours notice for daycare cancellations. For boarding reservations, we require 48 hours notice for cancellations or changes, especially during peak seasons (holidays, summer). Late cancellations may be subject to a fee. Please contact us as soon as possible if your plans change.",
    },
    {
      question: "Do you accept all dog breeds and sizes?",
      answer: "Yes! We welcome dogs of all breeds, ages, and sizes. However, all dogs must pass our Meet & Greet assessment to ensure they're comfortable in a group setting. Dogs must be spayed/neutered if over 6 months old, and current on vaccinations including Rabies, Distemper, and Bordetella.",
    },
    {
      question: "How do you handle dogs with special needs?",
      answer: "We're happy to accommodate dogs with special dietary needs, medication schedules, or other requirements. Please discuss any special needs during your Meet & Greet so we can ensure we're fully prepared to give your dog the best care possible. Additional fees may apply for dogs requiring extra attention.",
    },
    {
      question: "Is there outdoor time?",
      answer: "Absolutely! Our dogs enjoy both indoor and outdoor play areas. Weather permitting, dogs get supervised outdoor playtime throughout the day. We have secure, fenced areas where dogs can run, play, and explore safely. During inclement weather, we focus on indoor activities and rest time.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-golden font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. If you don't find what you're looking for, give us a call!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border shadow-soft px-6 data-[state=open]:shadow-elevated transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="tel:8026220474"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-golden transition-colors"
          >
            <span>Call us at (802) 622-0474</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
