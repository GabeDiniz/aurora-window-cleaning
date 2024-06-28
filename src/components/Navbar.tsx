import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ClassLink =
    "navbar uppercase py-2 md:py-0 hover:scale-110 hover:-translate-x-2 md:hover:translate-x-0 transition-all duration-100";

  return (
    <section
      className={`z-20 fixed px-10 py-5 w-full flex justify-between items-center text-lg text-white transition-all duration-300 ${
        hasScrolled ? "bg-white bg-opacity-30 backdrop-blur-md" : ""
      }`}
    >
      <Link to="/" className="hover:scale-110 transition-all duration-100">
        Student<strong>Works</strong>
      </Link>
      <div className="z-10 md:hidden hover:cursor-pointer">
        <div onClick={toggleMenu}>
          {isOpen ? <FaXmark size={24} /> : <GiHamburgerMenu size={24} />}
        </div>
      </div>
      <div
        className={`fixed md:static animatecss flex flex-col md:flex-row font-subtitle gap-5 md:gap-10 top-0 right-0 pt-16 pl-16 pr-10 h-full md:h-auto text-right w-fit md:w-auto bg-slate-800 bg-opacity-95 md:bg-transparent p-5 md:p-0 ${
          isOpen
            ? "flex animatecss-fadeInRightBig"
            : "animatecss-fadeOutRightBig md:animate-none"
        }`}
      >
        <Link to="/our-team" className={ClassLink}>
          Our Team
        </Link>
        <Link to="/services" className={ClassLink}>
          Services
        </Link>
        <Link to="/reviews" className={ClassLink}>
          Reviews
        </Link>
        <Link to="/free-estimate" className={ClassLink}>
          Free Estimate
        </Link>
      </div>
    </section>
  );
};

export { Navbar };
