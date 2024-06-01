import { Footer, Navbar, ReviewCards, ReviewsHero } from "@components";

const Reviews: React.FC = () => {
  return (
    <div className="h-screen bg-laceWhite overflow-auto">
      <Navbar />
      <ReviewsHero />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export { Reviews };
