interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={`text-center my-16 ${className}`}>
      <h2 className="text-3xl lg:text-[42px] sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 xl:text-lg text-gray-500 max-w-9/12 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
