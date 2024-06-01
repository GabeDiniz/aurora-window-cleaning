import { HeroImage } from "@assets";

const EstimateHeader: React.FC = () => {
  return (
    <section className="relative h-2/3 flex justify-center">
      <img
        className="absolute w-full h-full object-cover"
        src={HeroImage}
        alt="Hero"
      />
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div className="z-10 text-white max-w-5xl flex flex-col gap-3 text-center py-20 md:py-0 px-10 sm:px-4 justify-center">
        <h1 className="text-5xl md:text-7xl  uppercase animatecss animatecss-bounce">
          Book your free estimate!
        </h1>
        <p className="text-sm md:text-xl">
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
