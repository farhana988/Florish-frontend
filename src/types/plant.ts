export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  quantity: number;
  description: string;
}
export interface PlantCardProps {
  plant: Plant;
  onAddToCart: (e: React.MouseEvent, productId: number) => void;
}
