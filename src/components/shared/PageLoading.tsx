import { Leaf } from "lucide-react";

const PageLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefdf5] text-center px-4">
      {/* Animated Leaf Icon with subtle rotation */}
      <div className="mb-6 ">
        <Leaf className="w-14 h-14 text-dGreen transform rotate-[-10deg]" />
      </div>

      {/* Main Loading Text */}
      <h2 className="text-2xl font-serif font-semibold text-[#2b3b2b]">
        Nurturing your garden.
      </h2>

      {/* Animated Growing Dots */}
      <div className="mt-3 text-muted-foreground text-sm font-mono flex items-center gap-1">
        <span className="animate-sprout text-2xl delay-0">🌱</span>
        <span className="animate-sprout text-2xl delay-300">🌿</span>
        <span className="animate-sprout text-2xl delay-600">🌼</span>
      </div>
    </div>
  );
};

export default PageLoading;
