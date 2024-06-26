import { Footer, Navbar, OurTeamHero, TeamSection } from "@components";

const OurTeam: React.FC = () => {
  return (
    <div className="h-screen bg-laceWhite">
      <Navbar />
      <OurTeamHero />
      <TeamSection />
      <Footer />
    </div>
  );
};

export { OurTeam };
