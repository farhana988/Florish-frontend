import Image from "next/image";
import MissionSection from "./MissionSection";
import CoreValuesSection from "./CoreValuesSection";
import VisionSection from "./VisionSection";

const About = () => {
  return (
    <div className="space-y-16">
      <VisionSection />
      <section className="mx-[-1.5rem]">
        <div className=" relative h-60 md:h-72 lg:h-96 xl:h-[450px]">
          <Image src="/about.jpg" alt="about" fill className="object-cover" />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />
        </div>
      </section>

      <CoreValuesSection />
      <MissionSection />
    </div>
  );
};

export default About;
