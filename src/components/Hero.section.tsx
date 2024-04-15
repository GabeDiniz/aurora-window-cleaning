const HeroSection: React.FC = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-slate-400">
      {/* img here */}
      <div className="flex flex-col items-center gap-5 text-white">
        <h2 className="text-3xl uppercase">Serving Aurora</h2>
        <h1 className="text-7xl uppercase">StudentWorks Cleaning</h1>
        <button>Contact Us</button>
      </div>
    </section>
  );
};

export { HeroSection };
