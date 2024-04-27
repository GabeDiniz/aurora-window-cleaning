import { HeroImage } from "@assets";

const TeamSection: React.FC = () => {
  return (
    <section className="relative w-screen py-20 px-16 flex flex-col gap-20 justify-start items-center text-white bg-slate-900">
      <div className="flex gap-10 max-w-5xl">
        <img
          className="w-1/3 object-cover rounded-lg"
          src={HeroImage}
          alt="Hero"
        />
        <div className="m-2">
          <h1 className="text-4xl">Eric Faro</h1>
          <p>
            Hi, my name is, what? My name is, who? My name is, chka-chka, Slim
            Shady Hi, my name is, huh? My name is, what? My name is, chka-chka,
            Slim Shady
          </p>
        </div>
      </div>
      <div className="flex gap-10 max-w-5xl">
        <div className="m-2">
          <h1 className="text-4xl">Student Works</h1>
          <p>
            Student Works as a franchise has been providing homeowners with
            quality home services across Eastern Canada since 1981. Student
            Works helps young students and entrepreneurs take on owning and
            operating a successful business while earning an income to pay for
            our education. We are partnered with Student Works, so you have all
            of the benefits that come with working with a larger company, while
            still supporting us as a small student-run business!
          </p>
        </div>
        <img
          className="w-1/3 object-cover rounded-lg"
          src={HeroImage}
          alt="Hero"
        />
      </div>
      <div className="flex gap-10 max-w-5xl">
        <img
          className="w-1/3 object-cover rounded-lg"
          src={HeroImage}
          alt="Hero"
        />
        <div className="m-2">
          <h1 className="text-4xl">Multiple Sclerosis</h1>
          <p>
            Canada has one of the highest rates of Multiple Sclerosis (MS) in
            the world. Approximately 90000 Canadians are living with MS. That is
            why we donate a percentage of each job we complete to the MS Society
            of Canada. Since 2005, Student Works has raised over $1M for the MS
            Society of Canada.
          </p>
          <button className="mt-4">
            <a href="https://mscanada.ca/" target="_blank">
              Donate Now
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export { TeamSection };
