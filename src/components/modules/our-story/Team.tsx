import TeamCard from "@/components/cards/TeamCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { teamMembers } from "@/data/ourStoryData";
import React from "react";

const Team = () => {
  return (
    <>
      <section className="text-center">
        <SectionHeader
          title="  Meet Our Team"
          subtitle="We are a team of plant lovers, growers, and green-thumbs dedicated to
          helping you cultivate your indoor jungle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
