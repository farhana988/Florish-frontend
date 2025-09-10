interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className }: SectionHeaderProps) => {
  return (
    <h2
      className={`text-3xl lg:text-[42px] sm:text-3xl text-center my-16 ${className}`}
    >
      {title}
    </h2>
  );
};

export default SectionHeader;
