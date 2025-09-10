import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  textAlign?: "center" | "left";
}

const ValueCard = ({
  icon,
  title,
  description,
  iconColor = "text-dGreen",
  textAlign = "center",
}: ValueCardProps) => {
  return (
    <Card className="border-dGreen border-0 border-b-2 shadow-none hover:shadow-md">
      <CardHeader className={`flex flex-col items-center text-${textAlign}`}>
        <span className={iconColor}>{icon}</span>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className={`text-${textAlign} text-muted-foreground`}>
        {description}
      </CardContent>
    </Card>
  );
};

export default ValueCard;
