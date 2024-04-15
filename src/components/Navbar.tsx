const Navbar: React.FC = () => {
  return (
    <section className="fixed px-10 py-5 z-10 w-full flex justify-between text-lg text-white">
      <a href="" className="">
        StudentWorks
      </a>
      <div className="uppercase flex gap-10 font-thin">
        <a>Our Team</a>
        <a>Services</a>
        <a>Reviews</a>
        <a>Free Estimate</a>
        <a>Job Opportunities</a>
      </div>
    </section>
  );
};

export { Navbar };
