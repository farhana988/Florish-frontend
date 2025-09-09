interface AboutHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const AboutHeader = ({
  title,
  description,
  className = "",
}: AboutHeaderProps) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-muted-foreground mb-6">{description}</p>
    </div>
  );
};

export default AboutHeader;
