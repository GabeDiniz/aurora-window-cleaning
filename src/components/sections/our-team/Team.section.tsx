import { HeroImage } from "@assets";

const TeamSection: React.FC = () => {
  return (
    <section className="relative w-screen py-20 px-10 flex justify-start items-center bg-slate-900">
      <div>
        <img
          className="w-1/3 object-cover rounded-lg"
          src={HeroImage}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export { TeamSection };
