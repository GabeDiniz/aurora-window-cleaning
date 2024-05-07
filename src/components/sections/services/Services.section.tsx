// import { HeroImage } from "@assets";
import { servicesData } from "@data";

const Services: React.FC = () => {
  return (
    <section className="relative w-screen bg-laceWhite">
      <div className="py-10">
        {/* MAP ALL SERVICES */}
        {servicesData.map((product) => {
          return (
            <div className="text-3xl flex flex-col gap-5 mb-10 justify-center items-center">
              <h1>{product.title}</h1>
              <div className="flex gap-5 mx-10 items-start">
                {/* MAP EACH SERVICE SECTION DATA */}
                {product.data.map((item) => {
                  return (
                    <div className="flex flex-col justify-center gap-3">
                      <img src={item.banner} className="w-full rounded-md" />
                      <h2 className="text-base font-bold">{item.subtitle}</h2>
                      <p className="text-sm font-thin">{item.subtext}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Services };
