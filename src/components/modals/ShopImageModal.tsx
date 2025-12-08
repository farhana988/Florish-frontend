"use client";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
interface ImageModalProps {
  imageSrc: string;
  altText: string;
}
const ShopImageModal = ({ imageSrc, altText }: ImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Button to open modal */}
      <button
        aria-label="View image fullscreen"
        onClick={() => setIsOpen(true)}
        className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition"
        type="button"
      >
        <Search className="h-4 w-4 text-dGreen" />
      </button>
      {/* Modal Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 bg-opacity-80 flex items-center
          justify-center z-50 cursor-zoom-out"
        >
          <Image
            src={imageSrc}
            alt={altText}
            width={800}
            height={1000}
            className="object-contain max-h-[90vh] max-w-[90vw] bg-white"
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ShopImageModal;
