"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute right-2 top-2 z-20"
    >
      {copied ? (
        <Check className="w-7 h-7 text-green-600" />
      ) : (
        <Copy className="w-7 h-7 text-gray-800" />
      )}
    </button>
  );
}
