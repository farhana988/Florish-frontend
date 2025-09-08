import React from "react";
import BannerBackground from "./BannerBackground";
import BannerContent from "./BannerContent";
interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}
const Banner = ({
  imageUrl,
  title,
  subtitle,
  buttonText,
  buttonLink,
}: BannerProps) => {
  return (
    <div className="w-full relative overflow-hidden text-white max-w-[1600px] mx-auto">
      <BannerBackground imageUrl={imageUrl}>
        <BannerContent
          title={title}
          subtitle={subtitle}
          buttonText={buttonText}
          buttonLink={buttonLink}
        />
      </BannerBackground>
    </div>
  );
};

export default Banner;
