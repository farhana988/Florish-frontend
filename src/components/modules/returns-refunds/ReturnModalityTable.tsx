import { ReturnModalityTableProps } from "@/data/returnData";

const ReturnModalityTable = ({ data }: ReturnModalityTableProps) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-xl mt-6 mb-2">Return Options</h2>
      <table className="min-w-full border-collapse table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2 font-normal">Delivery Mode</th>
            <th className="border px-4 py-2 font-normal">Return Modality</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2 text-gray-600 text-sm">
                {item.deliveryMode}
              </td>
              <td className="border px-4 py-2 text-gray-600 text-sm">
                {item.returnModality}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnModalityTable;
