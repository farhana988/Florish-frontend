export interface Tip {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string;
}
export interface PlantCareCardProps {
  tip: Tip;
}
