import OurStorySection from "@/components/modules/our-story/OurStorySection";
import Stats from "@/components/modules/our-story/Stats";
import Team from "@/components/modules/our-story/Team";

const OurStory = () => {
  return (
    <section className="pt-10 xl:pt-20 space-y-20">
      <OurStorySection />
      <Stats />
      <Team />
    </section>
  );
};

export default OurStory;
