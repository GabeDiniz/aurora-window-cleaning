import { AboutSection, BookingSection, HeroSection, Navbar } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BookingSection />
    </div>
  );
};

export { Landing };
