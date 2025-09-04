import PromoImage from "./PromoImage";
import PromoTextContent from "./PromoTextContent";

const PromoSection = () => {
  return (
    <section className="pt-20 flex flex-col md:flex-row items-center justify-between gap-6">
      <PromoTextContent />
      <PromoImage />
    </section>
  );
};

export default PromoSection;
