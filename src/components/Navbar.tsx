import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <section className="fixed px-10 py-5 z-10 w-full flex justify-between text-lg text-white">
      <Link to="/" className="">
        StudentWorks
      </Link>
      <div className="uppercase flex gap-10 font-thin">
        <Link to="/our-team">Our Team</Link>
        <Link to="/services">Services</Link>
        <Link to="/">Reviews</Link>
        <Link to="/">Free Estimate</Link>
        <Link to="/">Job Opportunities</Link>
      </div>
    </section>
  );
};

export { Navbar };
