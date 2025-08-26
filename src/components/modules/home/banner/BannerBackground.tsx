import React from "react";

interface BannerBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
}

const BannerBackground: React.FC<BannerBackgroundProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div
      className="
        relative w-full  
        h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 
        transition-all duration-500 ease-in-out
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BannerBackground;
