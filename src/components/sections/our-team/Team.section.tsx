import { Eric1, HeroImage } from "@assets";

const TeamSection: React.FC = () => {
  const infoClass =
    "flex flex-col items-center md:flex-row gap-2 md:gap-10 max-w-5xl";

  return (
    <section className="relative py-20 px-16 flex flex-col gap-20 justify-start items-center bg-laceWhite text-black">
      <div className={`${infoClass}`}>
        <img
          className="w-full h-64 md:w-1/3 object-cover rounded-lg drop-shadow-lg"
          src={Eric1}
          alt="Hero"
        />
        <div className="m-2">
          <h1 className="text-4xl">Eric Faro</h1>
          <p className="pl-1">
            Hi, my name is Eric, and I am the owner of Newmarket Student Window
            Cleaning. I graduated with a Mechanical Engineering degree from
            Western University. I was born in Brazil and moved here when I was
            3. In 2021 I worked as a Window Cleaner for Student Works, which
            allowed me to develop in-depth knowledge about all of our services.
            The year after, I took on a new role as a Production Manager, and
            sold over $200,000 worth of work for 350+ happy homeowners. I am now
            running my own home maintenance business for the third year!
          </p>
        </div>
      </div>
      <div className={`md:flex-row-reverse ${infoClass}`}>
        <img
          className="w-full md:w-1/3 object-cover rounded-lg drop-shadow-lg"
          src={HeroImage}
          alt="Hero"
        />
        <div className="m-2 text-right">
          <h1 className="text-4xl">Student Works</h1>
          <p className="pr-1">
            Student Works as a franchise has been providing homeowners with
            quality home services across Eastern Canada since 1981. Student
            Works helps young students and entrepreneurs take on owning and
            operating a successful business while earning an income to pay for
            our education. We are partnered with Student Works, so you have all
            of the benefits that come with working with a larger company, while
            still supporting us as a small student-run business!
          </p>
        </div>
      </div>
      <div className={`${infoClass}`}>
        <img
          className="w-full md:w-1/3 object-cover rounded-lg drop-shadow-lg"
          src={HeroImage}
          alt="Hero"
        />
        <div className="m-2">
          <h1 className="text-4xl">Multiple Sclerosis (MS Canada)</h1>
          <p className="pl-1">
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
