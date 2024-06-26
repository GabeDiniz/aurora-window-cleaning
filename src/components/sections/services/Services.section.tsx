// import { HeroImage } from "@assets";
import { servicesData } from "@data";

const Services: React.FC = () => {
  return (
    <section className="relative bg-laceWhite">
      <div className="py-10">
        {/* MAP ALL SERVICES */}
        {servicesData.map((product, index) => {
          return (
            <div
              className="text-3xl flex flex-col gap-2 mb-10 justify-center items-center"
              key={index}
            >
              <h1 className="font-bold uppercase text-center">
                {product.title}
              </h1>
              <div className="flex flex-wrap sm:flex-nowrap gap-10 md:gap-5 mx-10 items-start max-w-7xl">
                {/* MAP EACH SERVICE SECTION DATA */}
                {product.data.map((item, index) => {
                  return (
                    <div
                      className="flex flex-col justify-center w-full gap-3 flex-shrink"
                      key={index}
                    >
                      <img
                        src={item.banner}
                        className="h-72 sm:h-80 object-cover rounded-md drop-shadow-md"
                      />
                      <h2 className="text-base">{item.subtitle}</h2>
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
