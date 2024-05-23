import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="z-20 fixed px-10 py-5 w-full flex justify-between items-center text-lg text-white">
      <Link to="/" className="hover:scale-110 transition-all duration-100">
        StudentWorks
      </Link>
      <div className="z-10 md:hidden hover:cursor-pointer">
        <div onClick={toggleMenu}>
          {isOpen ? <FaXmark size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </div>
      <div
        className={`uppercase animatecss flex gap-10 font-thin md:flex ${
          isOpen
            ? "flex animatecss-fadeInRightBig"
            : " animatecss-fadeOutRightBig"
        } flex-col md:flex-row fixed md:static top-0 right-0 pt-20 pl-16 pr-10 h-full md:h-auto text-right w-fit md:w-auto bg-slate-900 bg-opacity-95 md:bg-transparent p-5 md:p-0`}
      >
        <Link
          to="/our-team"
          className="py-2 md:py-0 hover:scale-110 transition-all duration-100"
        >
          Our Team
        </Link>
        <Link
          to="/services"
          className="py-2 md:py-0 hover:scale-110 transition-all duration-100"
        >
          Services
        </Link>
        <Link
          to="/reviews"
          className="py-2 md:py-0 hover:scale-110 transition-all duration-100"
        >
          Reviews
        </Link>
        <Link
          to="/free-estimate"
          className="py-2 md:py-0 hover:scale-110 transition-all duration-100"
        >
          Free Estimate
        </Link>
      </div>
    </section>
  );
};

export { Navbar };
