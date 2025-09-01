export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Starlight Succulent",
    category: "Indoor Plants",
    price: 95,
    rating: 4,
    image: "/plant1.png",
    badge: "Sale!",
  },
  {
    id: 2,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: 92,
    rating: 3,
    image: "/plant2.png",
  },
  {
    id: 3,
    name: "Golden Glow",
    category: "Indoor Plants",
    price: 85,
    rating: 5,
    image: "/plant3.png",
    badge: "New",
  },
];
