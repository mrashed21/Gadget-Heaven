import { Helmet } from "react-helmet";
const Statistics = () => {
  return (
    <>
      <Helmet>
        <title>Statistics - Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary px-20 py-10">
        <h2 className="text-center text-white font-bold text-3xl">
          Statistics
        </h2>
        <p className="text-white text-center my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    </>
  );
};

export default Statistics;
