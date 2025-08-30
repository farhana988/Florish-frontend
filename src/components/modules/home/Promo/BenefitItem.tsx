import IconWrapper from "@/components/shared/IconWrapper";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

interface BenefitItemProps {
  benefit: Benefit;
}

const BenefitItem = ({ benefit }: BenefitItemProps) => {
  const { icon, title, subtitle } = benefit;
  return (
    <div className="flex items-center gap-4">
      <IconWrapper>{icon}</IconWrapper>
      <div>
        <h3 className="text-base lg:text-lg xl:text-xl font-medium">{title}</h3>
        <p className="text-gray-500 text-xs lg:text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
