const AboutSection: React.FC = () => {
  const chooseUs = [
    {
      title: "100% Customer Satisfaction Process",
      content:
        "We complete a thorough walkaround with each client to ensure you are 100% satisfied with the work done on your home.",
    },
    {
      title: "$5M Liability Insurance",
      content:
        "We have $5 Million in Liability insurance and WSIB coverage. All of our employees have also completed a full safety training program.",
    },
    {
      title: "Detailed Estimate Process",
      content:
        "We take the time to thoroughly estimate every project and explain how your job will be done. This way you know exactly what to expect on the day of your project.",
    },
  ];

  return (
    <section className="py-20 flex flex-col justify-center items-center ]">
      <h1 className="text-4xl text-black">Why choose us</h1>
      <div className="flex mt-10 text-black max-w-7xl gap-10 px-20">
        {chooseUs.map((content, i) => (
          <div className="flex flex-col gap-5 text-center w-1/3" key={i}>
            <h2 className="text-xl">{content.title}</h2>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
      <hr className="w-3/4 mt-16 border-black border-1 rounded" />
    </section>
  );
};

export { AboutSection };
