const Navbar: React.FC = () => {
  return (
    <section className="fixed w-full flex justify-between px-10 py-5 bg-classicBlue text-white">
      <h1 className="uppercase">Logo here</h1>
      <div className="uppercase">
        <a>Page 1</a>
        <a>Page 2</a>
        <a>Page 3</a>
      </div>
    </section>
  );
};

export { Navbar };
