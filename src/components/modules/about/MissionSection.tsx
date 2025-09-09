import { CheckCircle } from "lucide-react";
import Image from "next/image";
import AboutHeader from "./AboutHeader";
import { missionSectionItems } from "@/data/aboutData";

const MissionSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <AboutHeader
            title="Our Mission"
            description="Our mission is to connect people with plants in a way that is simple, sustainable, and joyful. Whether you are a seasoned plant parent or just getting started, we are here to help every step of the way."
          />

          <ul className="space-y-3">
            {missionSectionItems.map((item, index) => (
              <li key={index} className="flex items-start gap-1 text-sm">
                <CheckCircle className="w-5 h-5 text-dGreen" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/monstera-deliciosa.png"
            alt="Our mission image"
            width={500}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default MissionSection;
