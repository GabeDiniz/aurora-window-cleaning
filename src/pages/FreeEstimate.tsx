import { Navbar, Footer, EstimateForm, EstimateHeader } from "@components";

const FreeEstimate: React.FC = () => {
  return (
    <div className="bg-laceWhite">
      <Navbar />
      <EstimateHeader />
      <EstimateForm />
      <Footer />
    </div>
  );
};

export { FreeEstimate };
