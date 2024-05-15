import { Navbar, Footer, EstimateForm } from "@components";

const FreeEstimate: React.FC = () => {
  return (
    <div className="bg-laceWhite">
      <Navbar />
      <EstimateForm />
      <Footer />
    </div>
  );
};

export { FreeEstimate };
