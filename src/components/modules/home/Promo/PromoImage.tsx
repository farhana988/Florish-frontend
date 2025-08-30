import Image from "next/image";

const PromoImage = () => {
  return (
    <div
      className="relative mr-2
      w-[320px] lg:w-[370px] xl:w-[470px] h-[320px] lg:h-[370px] xl:h-[470px]"
    >
      {/* Background ellipse images */}
      <Image
        src="/ellipse.png"
        alt="Decorative Ellipse"
        fill
        className="object-contain  z-10 mt-7 "
      />
      <Image
        src="/ellipse.png"
        alt="Decorative Ellipse"
        fill
        className="object-contain  z-10 mt-7  -rotate-12"
      />

      {/* Foreground plant image */}
      <div
        className="relative 
        w-[350px] lg:w-[400px] xl:w-[500px] h-[350px] lg:h-[400px] xl:h-[500px]"
      >
        <Image
          src="/promo.png"
          alt="Decorative Plant"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default PromoImage;
