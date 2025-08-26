import React from "react";
import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <div className="w-full relative overflow-hidden text-white max-w-[1600px] mx-auto">
      <BannerBackground imageUrl="/banner.jpg">
        <BannerContent />
      </BannerBackground>
    </div>
  );
};

export default Banner;
