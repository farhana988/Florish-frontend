import Image from "next/image";
import MissionSection from "./MissionSection";
import CoreValuesSection from "./CoreValuesSection";
import VisionSection from "./VisionSection";

const AboutPage = () => {
  return (
    <div className="space-y-16">
      <VisionSection />

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] h-60 md:h-72 lg:h-96 xl:h-[450px]">
        <Image src="/about.jpg" alt="about" fill className="object-cover" />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>

      <CoreValuesSection />
      <MissionSection />
    </div>
  );
};

export default AboutPage;
