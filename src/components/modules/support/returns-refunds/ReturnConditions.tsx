import { ReturnConditionsProps } from "@/data/returnData";

const ReturnConditions = ({ conditions }: ReturnConditionsProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl">Conditions for Returns</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-500">
        {conditions.map((condition, index) => (
          <li key={index}>{condition}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReturnConditions;
