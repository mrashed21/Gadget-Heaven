import PropTypes from "prop-types";
import ReactStars from "react-stars";
const Customer = ({ review }) => {
  return (
    <>
      <div className=" bg-white rounded-xl shadow-md p-3">
        <div className="flex items-center gap-2">
          <img
            className="h-14 w-14 rounded-full"
            src={review.image}
            alt="image"
          />
          <div className="">
            <h2 className="text-lg font-semibold">{review.name}</h2>
            <p>{review.city}</p>
          </div>
        </div>
        <div className="flex flex-grow">
          <p className="m-4 ">{review.description}</p>
        </div>
        <div className="flex justify-between mt-auto">
          <div className="flex items-center gap-3 ">
            <ReactStars
              count={5}
              value={review.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
            <p className="px-2 py-1 rounded-full text-sm bg-[#09080F0D]">
              {review.rating}
            </p>
          </div>
          <p>{review.date}</p>
        </div>
      </div>
    </>
  );
};
Customer.propTypes = {
  review: PropTypes.object,
};
export default Customer;
