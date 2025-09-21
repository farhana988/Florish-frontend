import { StepProps } from "@/data/returnData";

const ReturnStep = ({ title, steps }: StepProps) => {
  return (
    <>
      <h2 className="text-xl mb-6">{title}</h2>
      <ol className="list-decimal pl-5 space-y-2 text-gray-600">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
};

export default ReturnStep;
