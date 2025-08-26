import OutlineBtn from "@/components/buttons/OutlineBtn";

const BannerContent = () => {
  return (
    <div
      className="
        absolute inset-0 bg-black/60 flex items-center
        justify-center flex-col px-4
      "
    >
      <p className="text-sm md:text-base lg:text-xl text-center">
        Welcome to Flora
      </p>
      <h1
        className="
          text-white my-4 md:my-8 leading-9 lg:leading-16 text-center headline
          text-2xl md:text-4xl lg:text-5xl xl:text-6xl
        "
      >
        Beautiful Greens with Care <br /> Delivered Straight to Your Door
      </h1>
      <OutlineBtn text="Shop now" href="/shop" />
    </div>
  );
};

export default BannerContent;
