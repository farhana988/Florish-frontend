import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BannerButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
}

const OutlineBtn: React.FC<BannerButtonProps> = ({
  text,
  href,
  onClick,
  className = "",
  variant = "outline",
}) => {
  const buttonContent = (
    <Button
      variant={variant}
      onClick={onClick}
      className={`rounded-full bg-black/20 ${className}`}
    >
      {text}
    </Button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default OutlineBtn;
