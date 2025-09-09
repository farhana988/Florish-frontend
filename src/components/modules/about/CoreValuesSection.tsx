import { codeValues } from "@/data/aboutData";
import AboutHeader from "./AboutHeader";
import ValueCard from "@/components/cards/ValueCard";

const CoreValuesSection = () => {
  return (
    <>
      <AboutHeader
        className="text-center max-w-md lg:max-w-xl mx-auto"
        title="Our Core Values"
        description="These core principles guide every decision we make—from choosing our growers to how we treat our customers."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {codeValues.map((item, idx) => (
          <ValueCard key={idx} {...item} />
        ))}
      </div>
    </>
  );
};

export default CoreValuesSection;
