// import { HeroImage } from "@assets";
import { servicesData } from "@data";

// Mock Data
// {
//   title: "Window Cleaning",
//   data: [
//     {
//       image: HeroImage,
//       subtitle: "Exterior cleaning",
//       subtext:
//         "All of our window cleaning is done by hand. Exterior cleaning includes the complete cleaning of all window panes, frames, and sills. ",
//     },
//      {
//       image: HeroImage,
//       subtitle: "Exterior cleaning",
//       subtext:
//         "All of our window cleaning is done by hand. Exterior cleaning includes the complete cleaning of all window panes, frames, and sills. ",
//     },
//   ],
// },

const Services: React.FC = () => {
  return (
    <section className="relative w-screen bg-laceWhite">
      <div className="py-10">
        {/* MAP ALL SERVICES */}
        {servicesData.map((product) => {
          return (
            <div className="text-3xl flex flex-col gap-5 mb-10 justify-center items-center">
              <h1>{product.title}</h1>
              <div className="flex gap-5 mx-10">
                {/* MAP EACH SERVICE SECTION DATA */}
                {product.data.map((item) => {
                  return (
                    <div className="flex flex-col justify-center items-center gap-3">
                      <img src={item.banner} className="w-full rounded-md" />
                      <h2 className="text-base">{item.subtitle}</h2>
                      <p className="text-sm">{item.subtext}</p>
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
