import { HeroImage } from "@assets";

const OurTeamHero: React.FC = () => {
  return (
    <section className="relative h-2/3 flex justify-center items-center">
      <img
        className="absolute w-full h-full object-cover"
        src={HeroImage}
        alt="Hero"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div className="z-10 flex flex-col gap-5 text-white w-full max-w-5xl pl-12">
        <h1 className="text-7xl uppercase animatecss animatecss-bounce">
          Meet our Team
        </h1>
        <p className="max-w-2xl pl-2">
          Welcome to Aurora Student Window Cleaning! We are a hardworking and
          dedicated team of students operating in Aurora. Your satisfaction is
          our number one priority. From start to finish we want to ensure that
          we provide you with professional, thorough service. Thank you for
          supporting us!
        </p>
      </div>
    </section>
  );
};

export { OurTeamHero };
