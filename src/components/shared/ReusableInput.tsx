import { Input } from "../ui/input";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}

const ReusableInput = ({
  id,
  label,
  type,
  required,
  placeholder,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <Input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full mt-2 p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default ReusableInput;
