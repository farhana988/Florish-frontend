import { Textarea } from "../ui/textarea";

interface FormTextareaProps {
  id: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const ReusableTextArea = ({
  id,
  label,
  required,
  placeholder,
  rows = 4,
}: FormTextareaProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <Textarea
        id={id}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full mt-2 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default ReusableTextArea;
