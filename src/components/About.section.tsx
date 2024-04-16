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
    <section className="pt-10 max-w-7xl flex flex-col justify-center items-center bg-slate-400">
      <h1 className="">Why choose us</h1>
      <div className="flex">
        {chooseUs.map((content, i) => (
          <div className="flex flex-col" key={i}>
            <h1>{content.title}</h1>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { AboutSection };
