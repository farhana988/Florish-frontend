import { benefitItems } from "@/data/benefitData";
import BenefitItem from "./BenefitItem";

const PromoTextContent = () => {
  return (
    <div className="max-w-sm lg:max-w-lg xl:max-w-2xl">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl leading-tight">
        Decorate your <br />
        home with plants
      </h1>
      <p className="mt-4 lg:mt-6 text-gray-600 leading-relaxed text-xs lg:text-base">
        Transform your living space into a refreshing oasis with our curated
        collection of indoor plants. Whether you are a beginner or a seasoned
        plant parent, we offer premium-quality greenery and expert guidance to
        help your plants thrive — all delivered straight to your door.
      </p>

      <div className="mt-10 space-y-3 lg:space-y-6">
        {benefitItems.map((benefit, index) => (
          <BenefitItem key={index} benefit={benefit} />
        ))}
      </div>
    </div>
  );
};

export default PromoTextContent;
