import OutlineBtn from "@/components/buttons/OutlineBtn";
import Image from "next/image";
import React from "react";

const ShowcaseBanner = () => {
  return (
    <section className="mx-[-1.5rem]">
      <div
        className="relative h-52 md:h-72 lg:h-96 xl:h-[450px] w-full flex items-center
     justify-center text-center rounded "
      >
        {/* Background Image */}
        <Image
          src="/ShowcaseBanner.jpg"
          alt="Background Plant"
          layout="fill"
          objectFit="cover"
          className=" inset-0 z-0 fixed"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

        {/* Text + CTA */}
        <div className="relative z-20 px-4">
          <p className="text-base md:text-lg lg:text-xl mb-4 text-[#999999]">
            Bring nature into your home
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-5xl font-light mb-6 text-[#D19E84] leading-tight">
            Fresh, Healthy Plants Delivered
            <br />
            Right to Your Door
          </h1>
          <OutlineBtn text="Shop All Plants" href="/shop" />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBanner;
