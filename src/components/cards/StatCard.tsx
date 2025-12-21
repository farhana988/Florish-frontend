import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  gradient: string;
}

const StatCard = ({ title, value, icon: Icon, gradient }: StatCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-10 group-hover:opacity-20 transition`}
      />
      <CardContent className="relative p-6 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground mb-2">{title}</p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${gradient} text-white`}
        >
          <Icon className="h-6 w-6" />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
