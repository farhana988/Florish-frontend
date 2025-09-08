import { usePathname } from "next/navigation";
import React from "react";

interface BannerBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BannerBackground: React.FC<BannerBackgroundProps> = ({
  imageUrl,
  children,
}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const heightClasses = isHome
    ? "h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
    : "h-[280px] md:h-[350px] lg:h-[420px] xl:h-[490px]";
  return (
    <div
      className={`
        relative w-full  
           ${heightClasses}
        transition-all duration-500 ease-in-out
        bg-cover bg-center bg-no-repeat
      `}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BannerBackground;
