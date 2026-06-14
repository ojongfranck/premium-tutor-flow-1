import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this suitable for absolute beginners?",
    answer: "Yes! Our program is specifically designed for beginners who have no prior experience with online tutoring platforms. We guide you from account creation to your first student.",
  },
  {
    question: "What tutoring platforms will I learn about?",
    answer: "We cover the most popular global platforms such as Preply, iTalki, Cambly, and others that are beginner-friendly and reliable for international payments.",
  },
  {
    question: "How long does the mentorship program last?",
    answer: "The structured part of the mentorship lasts for 4 weeks, but you get ongoing access to our community and support resources to ensure long-term success.",
  },
  {
    question: "Do I need a university degree to start?",
    answer: "While some specific platforms or subjects might require one, many opportunities exist for tutors who don't have a degree but have the right skills and profile setup—which we help you with.",
  },
  {
    question: "How do I receive payments from international students?",
    answer: "We provide guidance on setting up reliable payment gateways like Payoneer or direct bank transfers, depending on what works best for your location.",
  },
  {
    question: "Is there a guarantee I will get students?",
    answer: "While we can't legally guarantee income, our students who follow our profile optimization and application strategies consistently see a high success rate in securing their first clients.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-brand-magenta">Questions</span></h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about starting your online tutoring journey.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-100 rounded-2xl px-6 bg-gray-50/50"
            >
              <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-brand-magenta transition-colors py-6 text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
