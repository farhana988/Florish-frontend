import { stats } from "@/data/ourStoryData";

const Stats = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 bg-white">
      {stats.map(({ Icon, count, label }, index) => (
        <div key={index} className="text-center items-center flex flex-col">
          <Icon className="w-10 h-10 text-dGreen" />
          <h2 className="text-4xl font-bold  mt-4">{count}</h2>
          <p className="text-lg text-gray-500">{label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
