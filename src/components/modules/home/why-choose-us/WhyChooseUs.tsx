import { CreditCard, Truck, PackageCheck, Heart } from "lucide-react";

const plantFeaturesData = [
  {
    title: "Secure Payment",
    description: "Encrypted and safe payment every time.",
    icon: <CreditCard className="  text-black mb-4" />,
  },
  {
    title: "Free Shipping",
    description: "No shipping fees on orders over $50.",
    icon: <Truck className="  text-black mb-4" />,
  },
  {
    title: "Delivered with Care",
    description: "Hand-packed and safely delivered to you.",
    icon: <PackageCheck className="  text-black mb-4" />,
  },
  {
    title: "Excellent Service",
    description: "Friendly support for all your questions.",
    icon: <Heart className="  text-black mb-4" />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 border-b-2">
      {plantFeaturesData.map((item, index) => (
        <div
          key={index}
          className="p-3 lg:p-6 h-full flex flex-col items-center text-center bg-white"
        >
          <span className="bg-[#ecf4d3] px-4 pt-3 rounded-full mb-4">
            {item.icon}
          </span>
          <h2 className="text-base font-medium mb-2">{item.title}</h2>

          <p className="text-xs text-gray-600 min-h-8">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;
