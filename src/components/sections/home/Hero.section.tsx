import { HeroImage } from "@assets";
import { CiMail } from "react-icons/ci";

const HeroSection: React.FC = () => {
  return (
    <section className="stacked h-screen flex justify-center items-center">
      <img className="block w-full h-screen object-cover" src={HeroImage} />
      <div className="absolute w-full h-screen bg-black opacity-70" />
      <div className="absolute flex flex-col items-center gap-5 text-white">
        <h2 className="text-lg sm:text-2xl md:text-3xl uppercase animatecss animatecss-backInDown">
          Serving Aurora
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl px-3 uppercase text-center animatecss animatecss-zoomIn">
          Student<strong>Works</strong> Cleaning
        </h1>

        <button className="border-white flex justify-center items-stretch gap-2">
          <CiMail size={25} />
          Contact Us
        </button>
      </div>
    </section>
  );
};

export { HeroSection };
