import { Footer, Navbar, ServicesHero, Services } from "@components";

const OurServices: React.FC = () => {
  return (
    <div className="h-screen bg-laceWhite">
      <Navbar />
      <ServicesHero />
      <Services />
      <Footer />
    </div>
  );
};

export { OurServices };
