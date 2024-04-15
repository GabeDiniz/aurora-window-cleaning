const Navbar: React.FC = () => {
  return (
    <section className="fixed w-full flex justify-between px-10 py-5 text-white">
      <h1 className="">StudentWorks</h1>
      <div className="uppercase flex gap-10">
        <a>Page 1</a>
        <a>Page 2</a>
        <a>Page 3</a>
      </div>
    </section>
  );
};

export { Navbar };
