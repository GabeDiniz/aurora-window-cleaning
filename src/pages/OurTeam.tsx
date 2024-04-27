import { Footer, Navbar, OurTeamHero, TeamSection } from "@components";

const OurTeam: React.FC = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Navbar />
      <OurTeamHero />
      <TeamSection />
      <Footer />
    </div>
  );
};

export { OurTeam };
