import { Leaf, Smile, ShoppingBag } from "lucide-react";
export interface StatItem {
  Icon: React.ElementType;
  count: string;
  label: string;
}

export const stats: StatItem[] = [
  { Icon: ShoppingBag, count: "120K+", label: "Plants Delivered" },
  { Icon: Leaf, count: "300+", label: "Varieties of Plants" },
  { Icon: Smile, count: "95K+", label: "Happy Plant Lovers" },
];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
export const teamMembers: TeamMember[] = [
  {
    name: "Ava Patel",
    role: "Founder & Plant Expert",
    image: "/members/Ava Patel.jpg",
    bio: "Passionate about helping people grow their green space with ease.",
  },
  {
    name: "Liam Rodriguez",
    role: "Horticulturist",
    image: "/members/Liam Rodriguez.jpeg",
    bio: "Specializes in rare indoor plants and sustainable gardening practices.",
  },
  {
    name: "Sofia Nguyen",
    role: "Customer Happiness Lead",
    image: "/members/Sofia Nguyen.jpg",
    bio: "Here to support your plant journey, one happy leaf at a time.",
  },
];
