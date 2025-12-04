import OutlineBtn from "@/components/buttons/OutlineBtn";
interface BannerContentProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const BannerContent = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: BannerContentProps) => {
  const formattedTitle = title.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));
  return (
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center flex-col px-4">
      {subtitle && (
        <p className="text-sm md:text-base lg:text-xl text-center">
          {subtitle}
        </p>
      )}
      <h1 className="text-white my-4 md:my-8 leading-9 lg:leading-16 text-center headline text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
        {formattedTitle}
      </h1>
      {buttonText && buttonLink && (
        <OutlineBtn text={buttonText} href={buttonLink} />
      )}
    </div>
  );
};

export default BannerContent;
