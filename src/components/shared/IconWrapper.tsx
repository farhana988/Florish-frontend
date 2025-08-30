interface IconWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const IconWrapper = ({ children, className = "" }: IconWrapperProps) => {
  return (
    <span
      className={`bg-[#ecf4d3] px-4 py-4 rounded-full inline-flex items-center
         justify-center ${className}`}
    >
      {children}
    </span>
  );
};

export default IconWrapper;
