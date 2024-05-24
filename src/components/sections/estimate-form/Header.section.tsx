import { HeroImage } from "@assets";

const EstimateHeader: React.FC = () => {
  return (
    <section className="relative w-screen h-2/3 flex justify-center items-center">
      <img
        className="absolute w-full h-full object-cover"
        src={HeroImage}
        alt="Hero"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div className="z-10 text-white max-w-5xl flex flex-col gap-3 text-center items-center">
        <h1 className="text-7xl uppercase animatecss animatecss-bounce">
          Book your free estimate!
        </h1>
        <p className="text-xl">
          If you have any questions or inquiries feel free to call or email for
          more information.
        </p>
        <a href="mailto:efaro@hotmail.com" className="underline">
          efaro@hotmail.com
        </a>
      </div>
    </section>
  );
};

export { EstimateHeader };
