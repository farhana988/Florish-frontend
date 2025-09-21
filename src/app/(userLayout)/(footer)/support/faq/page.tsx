import FAQSection from "@/components/modules/support/faq/FAQSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { Accordion } from "@/components/ui/accordion";
import faqData from "@/data/faqData";

const Faq = () => {
  return (
    <div className="xl:pt-1">
      <SectionHeader
        title="Got Questions?"
        subtitle="Find answers to the most common questions about our plant store and care
        advice!"
      />

      <div className="mt-8">
        <Accordion type="single" collapsible>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {faqData.map((section) => (
              <div key={section.title}>
                <FAQSection title={section.title} items={section.items} />
              </div>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
