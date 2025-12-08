"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface SelectFieldProps {
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  defaultValue?: string;
}

const SelectField = ({
  name,
  placeholder,
  options,
  defaultValue,
}: SelectFieldProps) => {
  const [selected, setSelected] = useState(defaultValue || "");

  return (
    <div className="flex flex-col gap-1 w-full">
      {/* Hidden input to send value through formData */}
      <input type="hidden" name={name} value={selected} />

      <Select value={selected} onValueChange={(val) => setSelected(val)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
