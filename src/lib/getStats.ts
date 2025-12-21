import {
  Users,
  Leaf,
  ShoppingCart,
  TicketPercent,
  DollarSign,
  LucideIcon,
} from "lucide-react";

export interface Stat {
  title: string;
  value: string | number;
  icon: LucideIcon;
  gradient: string;
}
interface StatsProps {
  usersCount: number;
  plantsCount: number;
  ordersCount: number;
  couponsCount: number;
  totalRevenue: number;
}

export const getStats = ({
  usersCount,
  plantsCount,
  ordersCount,
  couponsCount,
  totalRevenue,
}: StatsProps): Stat[] => [
  {
    title: "Total Users",
    value: usersCount,
    icon: Users,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Total Plants",
    value: plantsCount,
    icon: Leaf,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Total Orders",
    value: ordersCount,
    icon: ShoppingCart,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Total Coupons",
    value: couponsCount,
    icon: TicketPercent,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Total Revenue",
    value: `$ ${totalRevenue}`,
    icon: DollarSign,
    gradient: "from-cyan-500 to-sky-500",
  },
];
