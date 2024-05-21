import { HeroImage } from "@assets";
import { Link } from "react-router-dom";

const BookingSection: React.FC = () => {
  return (
    <section className="mt-5 mb-16 flex flex-col-reverse sm:flex-row justify-center gap-8 lg:gap-20 px-8 md:px-20">
      <div className="flex flex-col items-center text-center sm:items-start sm:text-left text-black gap-4">
        <h1 className="text-3xl md:text-4xl">
          Schedule your free estimate today!
        </h1>
        <p className="text-md">
          Schedule an estimate at your convenience. We look forward to meeting
          with you!
        </p>
        <Link to="/free-estimate">
          <button className="max-w-64">Book estimate</button>
        </Link>
      </div>
      <img
        className="w-full sm:w-1/3 lg:w-1/4 object-cover rounded-lg"
        src={HeroImage}
      />
    </section>
  );
};

export { BookingSection };
