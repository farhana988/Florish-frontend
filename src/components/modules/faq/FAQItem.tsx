import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItemProps {
  value: string;
  question: string;
  answer: string;
}

const FAQItem = ({ value, question, answer }: FAQItemProps) => {
  return (
    <AccordionItem value={value}>
      <h3>
        <AccordionTrigger
          className="flex justify-between items-center w-full p-4
        text-base md:text-lg"
        >
          {question}
        </AccordionTrigger>
      </h3>
      <AccordionContent>
        <p className="text-gray-500 px-4 text-xs md:text-base">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
