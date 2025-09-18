import React from "react";
import FAQItem from "./FAQItem";
interface FAQ {
  value: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQ[];
}

const FAQSection = ({ title, items }: FAQSectionProps) => {
  return (
    <section>
      <h2 className="text-3xl text-dGreen">{title}</h2>
      <div className="mt-4 space-y-4">
        {items.map((faq) => (
          <FAQItem key={faq.value} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
