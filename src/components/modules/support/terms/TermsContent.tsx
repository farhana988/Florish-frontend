import { terms } from "@/data/termsData";

const TermsContent = () => {
  return (
    <div className="space-y-10">
      {terms.map((term) => (
        <div key={term.id} title={term.title}>
          <h2 className="text-xl lg:text-2xl mb-4">{term.title}</h2>
          <p className="text-xs lg:text-base text-gray-500"> {term.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TermsContent;
