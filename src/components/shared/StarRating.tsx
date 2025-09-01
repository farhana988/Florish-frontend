import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex gap-1 mb-2">
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="w-4 h-4 text-black" />
      ))}
    </div>
  );
};

export default StarRating;
