import { HeroImage } from "@assets";

const BookingSection: React.FC = () => {
  return (
    <section className="mt-5 mb-16 flex justify-center gap-20 px-20">
      <div className="flex flex-col text-white gap-4">
        <h1 className="text-4xl">Schedule your free estimate today!</h1>
        <p className="text-md">
          Schedule an estimate at your convenience. We look forward to meeting
          with you!
        </p>
        <button className="max-w-64">Book estimate</button>
      </div>
      <img className="w-1/3 lg:w-1/4 object-cover rounded-lg" src={HeroImage} />
    </section>
  );
};

export { BookingSection };