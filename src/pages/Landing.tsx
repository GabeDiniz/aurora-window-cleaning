import {
  AboutSection,
  BookingSection,
  Footer,
  HeroSection,
  Navbar,
} from "@components";

const Landing: React.FC = () => {
  return (
    <div className="bg-laceWhite">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export { Landing };
