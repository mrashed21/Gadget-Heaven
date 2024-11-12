import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Customer from "../components/Customer";
const Testimonial = () => {
  const testimonials = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Testimonial -Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary px-20 py-10">
        <h2 className="text-center text-white font-bold text-3xl">
          Customer Revew
        </h2>
        <p className="text-white text-center my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 mx-10">
        {testimonials.map((review, idx) => (
          <Customer key={idx} review={review} />
        ))}
      </div>
    </>
  );
};

export default Testimonial;
