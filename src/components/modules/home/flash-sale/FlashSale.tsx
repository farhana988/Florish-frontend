import Image from "next/image";
import OutlineBtn from "../../../buttons/OutlineBtn";

const FlashSale = () => {
  return (
    <section className="mx-[-1.5rem]">
      <div className="relative h-60 md:h-72 lg:h-96 xl:h-[450px] w-full flex items-center justify-center text-center rounded">
        {/* Background Image */}

        <Image
          src="/nice-potted-plant.jpg"
          alt="Flash Sale Background"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Text + CTA */}
        <div className="relative z-20 px-6 md:px-0 md:w-1/2 mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-[42px] mb-4 text-white">
            Flash Sale: Up to 50% Off <br />
            On Select Items!
          </h1>

          <p className="text-xs md:text-sm lg:text-base text-white mb-8">
            Don’t miss out on our flash sale event! For a limited time, enjoy up
            to 50% off on a selection of our best-selling plants.
          </p>

          <OutlineBtn text="Shop Now" href="/shop" />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
