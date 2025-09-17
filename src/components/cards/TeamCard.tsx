import { TeamMember } from "@/data/ourStoryData";
import Image from "next/image";

const TeamCard = ({ name, role, image, bio }: TeamMember) => {
  return (
    <div className="p-6 rounded-lg border-b-2 border-dGreen hover:shadow-lg transition-shadow">
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl font-semibold ">{name}</h3>
      <p className="text-sm text-dGreen mb-2">{role}</p>
      <p className="text-xs text-gray-500">{bio}</p>
    </div>
  );
};

export default TeamCard;
