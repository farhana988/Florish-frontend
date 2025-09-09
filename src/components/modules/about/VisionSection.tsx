import { visionItems } from "@/data/aboutData";
import AboutHeader from "./AboutHeader";
import ValueCard from "@/components/cards/ValueCard";

const VisionSection = () => (
  <>
    <AboutHeader
      className="text-center max-w-md lg:max-w-xl mx-auto"
      title="Our Vision"
      description="Our vision is to reconnect people with nature—one plant at a time. We believe that greenery should be part of everyday life, accessible to all, and rooted in responsibility to the earth and one another."
    />
    <div className="grid gap-6 md:grid-cols-3">
      {visionItems.map((item, idx) => (
        <ValueCard key={idx} {...item} />
      ))}
    </div>
  </>
);

export default VisionSection;
