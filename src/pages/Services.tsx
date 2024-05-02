import { Footer, Navbar, ServicesHero } from "@components";

const Services: React.FC = () => {
  return (
    <div className="h-screen bg-laceWhite">
      <Navbar />
      <ServicesHero />
      <Footer />
    </div>
  );
};

export { Services };
