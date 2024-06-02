import { reviewsData } from "@data";

const ReviewCards: React.FC = () => {
  return (
    <section className="relative bg-laceWhite flex justify-center">
      <div className="flex flex-wrap justify-center gap-5 px-10 py-10 max-w-7xl">
        {/* MAP EACH CARD */}
        {reviewsData.map((review, index) => {
          return (
            <div
              className="bg-gray-300 p-5 rounded-xl w-80 flex flex-col gap-4 drop-shadow-lg"
              key={index}
            >
              <div className="flex items-center gap-5">
                <img className="rounded-full w-12 h-12" src={review.image} />
                <h3 className="text-lg font-bold">{review.name}</h3>
              </div>
              <p>{review.review}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { ReviewCards };
