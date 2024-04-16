import { AboutSection, HeroSection, Navbar } from "@components";

const Landing: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export { Landing };
