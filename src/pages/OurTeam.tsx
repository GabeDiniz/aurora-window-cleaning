import { Footer, Navbar, OurTeamHero } from "@components";

const OurTeam: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <OurTeamHero />
      <Footer />
    </div>
  );
};

export { OurTeam };
