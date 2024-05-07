import { Footer, Navbar, ReviewsHero } from "@components";

const Reviews: React.FC = () => {
  return (
    <div className="h-screen bg-laceWhite">
      <Navbar />
      <ReviewsHero />
      <Footer />
    </div>
  );
};

export { Reviews };
