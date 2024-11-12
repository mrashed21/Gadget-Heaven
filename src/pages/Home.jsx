import { Helmet } from "react-helmet";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Allproucts from "../components/Allproucts";
import BannerImg from "/public/images/banner.jpg";
const Home = () => {
  const navigate = useNavigate();
  const handleShopBtn = () => {
    navigate("/dashboard");
  };
  const categories = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Gadget Heaven - Home</title>
      </Helmet>
      <div className="md:relative flex flex-col items-center w-full">
        <div className="bg-primary px-10 pb-52  rounded-b-xl">
          <h1 className="text-5xl text-white text-center font-bold pt-8">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white my-8 text-center ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="mx-auto w-fit">
            <button
              onClick={handleShopBtn}
              className="btn btn-outline btn-primary text-primary bg-white shadow-btn-shadow text-lg font-bold"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="md:absolute p-4 md:px-20 md:top-96 lg:top-80">
          <div className="p-3 bg-[#FFFFFF4D] border-2 border-gray-200 rounded-xl">
            <img className="rounded-xl" src={BannerImg} alt="Bannner Image" />
          </div>
        </div>
      </div>
      <div className="md:mt-80">
        <Allproucts categories={categories}></Allproucts>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Home;
