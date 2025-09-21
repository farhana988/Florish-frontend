import { terms } from "@/data/termsData";

const TermsContent = () => {
  return (
    <>
      {terms.map((term) => (
        <div key={term.id} title={term.title}>
          <h2 className="text-xl md:text-3xl mb-4">{term.title}</h2>
          <p className="text-xs md:text-lg text-gray-500"> {term.content}</p>
        </div>
      ))}
    </>
  );
};

export default TermsContent;
