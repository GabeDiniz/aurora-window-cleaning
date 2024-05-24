import { HeroImage } from "@assets";

const ServicesHero: React.FC = () => {
  return (
    <section className="relative h-2/3 flex justify-start items-center">
      <img
        className="absolute w-full h-full object-cover"
        src={HeroImage}
        alt="Hero"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div className="z-10 flex flex-col w-full items-center gap-5 text-white px-10">
        <h1 className="text-7xl uppercase animatecss animatecss-bounce">
          Our Services
        </h1>
      </div>
    </section>
  );
};

export { ServicesHero };
