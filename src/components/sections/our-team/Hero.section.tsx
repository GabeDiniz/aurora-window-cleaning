import { HeroImage } from "@assets";

const OurTeamHero: React.FC = () => {
  return (
    <section className="stacked w-screen h-screen flex justify-center items-center">
      <img className="block w-full h-screen object-cover" src={HeroImage} />
      <div className="absolute w-screen h-screen bg-black opacity-70" />
      <div className="absolute flex flex-col items-center gap-5 text-white">
        <h2 className="text-3xl uppercase animatecss animatecss-backInDown">
          Meet Our Team
        </h2>
        <h1 className="text-7xl uppercase text-center">
          StudentWorks Cleaning
        </h1>

        <button>Contact Us</button>
      </div>
    </section>
  );
};

export { OurTeamHero };
