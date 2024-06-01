const ReviewCards: React.FC = () => {
  return (
    <section className="relative h-2/3 flex justify-start items-center">
      <div className="absolute w-full h-full bg-black bg-opacity-70" />
      <div className="z-10 flex flex-col w-full items-center gap-5 text-white px-10">
        <h1 className="text-7xl uppercase animatecss animatecss-bounce">
          Reviews
        </h1>
      </div>
    </section>
  );
};

export { ReviewCards };
