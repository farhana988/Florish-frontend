export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Starlight Succulent",
    category: "Indoor Plants",
    price: 95,
    rating: 4,
    image: "/plants/plant1.png",
    badge: "Sale!",
  },
  {
    id: 2,
    name: "Silver Mist",
    category: "Indoor Plants",
    price: 92,
    rating: 3,
    image: "/plants/plant2.png",
  },
  {
    id: 3,
    name: "Golden Glow",
    category: "Indoor Plants",
    price: 85,
    rating: 5,
    image: "/plants/plant3.png",
    badge: "New",
  },
  {
    id: 4,
    name: "feey",
    category: "Succulents",
    price: 48,
    rating: 4,
    image: "/plants/plant4.png",
    badge: "Limited",
  },
  {
    id: 5,
    name: "patrick-murray",
    category: "Indoor Plants",
    price: 66,
    rating: 5,
    image: "/plants/plant5.png",
  },
  {
    id: 6,
    name: "patrycja-chociej",
    category: "Succulents",
    price: 35,
    rating: 3,
    image: "/plants/plant6.png",
  },
  {
    id: 7,
    name: "Sterre Reeuwijk",
    category: "Indoor Plants",
    price: 70,
    rating: 4,
    image: "/plants/plant7.png",
  },
  {
    id: 8,
    name: "Kelsey Brown",
    category: "Succulents",
    price: 40,
    rating: 5,
    image: "/plants/plant8.png",
    badge: "New",
  },
  {
    id: 9,
    name: "Hermes Rivera",
    category: "Indoor Plants",
    price: 80,
    rating: 3,
    image: "/plants/plant9.png",
  },
  {
    id: 10,
    name: "Galina",
    category: "Succulents",
    price: 50,
    rating: 4,
    image: "/plants/plant10.png",
  },
  {
    id: 11,
    name: "antonio-araujo",
    category: "Indoor Plants",
    price: 60,
    rating: 5,
    image: "/plants/plant11.png",
    badge: "Sale!",
  },
  {
    id: 12,
    name: "Stephanie Harvey",
    category: "Succulents",
    price: 45,
    rating: 4,
    image: "/plants/plant12.png",
  },
  {
    id: 13,
    name: "Sanni Sahil",
    category: "Indoor Plants",
    price: 75,
    rating: 4,
    image: "/plants/plant13.png",
  },
  {
    id: 14,
    name: "Carlos Cruz",
    category: "Succulents",
    price: 55,
    rating: 5,
    image: "/plants/plant14.png",
    badge: "New",
  },
];
