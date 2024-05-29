import { whyChooseUs } from "@data";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 flex flex-col justify-center items-center ]">
      <h1 className="text-4xl text-black">Why choose us</h1>
      <div className="flex flex-col sm:flex-row items-center mt-10 text-black max-w-7xl gap-10 px-8 md:px-20">
        {whyChooseUs.map((content, i) => (
          <div className="flex flex-col gap-5 text-center md:w-1/3" key={i}>
            <h2 className="text-xl font-bold">{content.title}</h2>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
      <hr className="w-3/4 mt-16 border-black border-1 rounded" />
    </section>
  );
};

export { AboutSection };
