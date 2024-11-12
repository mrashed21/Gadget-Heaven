import { useContext } from "react";
import { Helmet } from "react-helmet";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import "react-toastify/dist/ReactToastify.css";
import { AllprouctContext, WishListContext } from "../layouts/MainLayouts";

const ProductDtls = () => {
  const { addToWishList, addToCart, whishList } = useContext(WishListContext);
  const allProducts = useContext(AllprouctContext);
  const { productId } = useParams();

  const singleProduct = allProducts.find(
    (pdct) => parseInt(pdct.product_id) === parseInt(productId)
  );

  const isExistToWish = whishList.find(
    (pdt) => pdt.product_id == singleProduct.product_id
  );

  const handleAddToCart = () => {
    addToCart(singleProduct);
  };

  const handleAddToWishList = () => {
    addToWishList(singleProduct);
  };

  return (
    <>
      <Helmet>
        <title> Product - Gadget Heaven</title>
      </Helmet>
      <div className="relative flex flex-col items-center md:mb-[550px]">
        <div className="bg-primary pt-5 pb-40">
          <h1 className="text-white font-bold text-3xl text-center">
            Product Details
          </h1>
          <p className="text-white mx-28 text-center mt-3">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="px-14 md:absolute top-40">
          <div className="py-10 bg-white shadow-lg rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={singleProduct.product_image}
                className="rounded-lg shadow-xl"
              />
              <div>
                <h1 className="text-3xl font-semibold text-[#09080F]">
                  {singleProduct.product_title}
                </h1>
                <p className="py-2">Price: ${singleProduct.price}</p>
                <div className="w-fit">
                  <p className="px-2 text-sm rounded-full border-2 border-[#309C08] text-[#309C08]">
                    {singleProduct.availability ? "InStock" : "Out Of Stock"}
                  </p>
                </div>
                <p className="py-3 text-[#09080F99] text-lg">
                  {singleProduct.description}
                </p>

                {singleProduct.specification && (
                  <div className="my-2">
                    <h3 className="text-lg font-bold">Specifications:</h3>
                    <ol className="list-decimal pl-6 mt-2 text-[#09080F99] text-lg">
                      {singleProduct.specification &&
                        singleProduct.specification.map((product, idx) => (
                          <li key={idx}>{product}</li>
                        ))}
                    </ol>
                  </div>
                )}

                <div className="my-2">
                  <h3 className="text-lg font-bold">
                    {" "}
                    <span className="text-[#09080F]">Rating</span> ⭐{" "}
                  </h3>
                  <div className="flex items-center gap-3">
                    <ReactStars
                      count={5}
                      value={singleProduct.rating}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                    />
                    <p className="px-2 py-1 rounded-full text-sm bg-[#09080F0D]">
                      {singleProduct.rating}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-xl ">
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center bg-primary btn text-white rounded-full hover:bg-purple-200 hover:text-red-500"
                  >
                    <span>Add To Cart</span>
                    <span className="text-2xl">
                      <IoCartOutline />
                    </span>
                  </button>
                  <button
                    onClick={handleAddToWishList}
                    className={
                      isExistToWish
                        ? "w-10 h-10 flex text-2xl items-center justify-center text-red-500 bg-gray-400 rounded-full"
                        : "  w-10 h-10 flex text-2xl items-center justify-center border-2 border-gray-200 bg-white btn-circle hover:bg-purple-200 hover:text-red-500"
                    }
                  >
                    <IoMdHeartEmpty />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDtls;
