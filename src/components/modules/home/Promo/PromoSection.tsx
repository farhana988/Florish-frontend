import PromoImage from "./PromoImage";
import PromoTextContent from "./PromoTextContent";

const PromoSection = () => {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between">
      <PromoTextContent />
      <PromoImage />
    </section>
  );
};

export default PromoSection;
