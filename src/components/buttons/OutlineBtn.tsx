import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BannerButtonProps {
  text: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const OutlineBtn: React.FC<BannerButtonProps> = ({
  text,
  href,
  onClick,
  className = "bg-black/20 text-white",
  variant = "outline",
  type = "submit",
  disabled = false,
}) => {
  const buttonContent = (
    <Button
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full ${className}`}
    >
      {text}
    </Button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default OutlineBtn;
