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
      <AccordionTrigger
        className="flex justify-between items-center w-full p-4 text-base md:text-lg
        data-[state=closed]:border-b-2 data-[state=closed]:border-dGreen"
      >
        {question}
      </AccordionTrigger>

      <AccordionContent>
        <p className="text-gray-500 px-4 text-xs md:text-base">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
