import {
  AboutSection,
  BookingSection,
  FooterSection,
  HeroSection,
  Navbar,
} from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BookingSection />
      <FooterSection />
    </div>
  );
};

export { Landing };
