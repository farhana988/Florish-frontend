import { Sparkles } from "lucide-react";
import Image from "next/image";

const OurStorySection = () => {
  return (
    <section className="flex flex-col md:flex-row gap-12 items-center justify-between">
      <div className="relative w-full lg:w-5/12 flex justify-center">
        <div className="w-72 xl:w-96 h-72 xl:h-96 clip-hexagon relative flex-shrink-0">
          <Sparkles className="absolute -top-8 right-6 xl:right-10 text-dGreen w-16 h-16 z-10" />
          <Image
            src="/our-story.jpg"
            alt="Team"
            fill
            className="w-full h-full"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
            }}
          />
        </div>
      </div>
      <div className="w-full lg:w-7/12 lg:p-6">
        <h2 className="text-3xl lg:text-[42px] font-semibold mb-4">
          Our Story
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Rooted in a love for greenery, we started with a simple mission: to
          bring the beauty of plants into every home. What began as a small
          passion project has grown just like our plants into a place where
          nature meets nurture. Whether you are a seasoned plant parent or just
          starting out, we’re here to help your space thrive with fresh, healthy
          plants and expert tips along the way.
        </p>
      </div>
    </section>
  );
};

export default OurStorySection;
