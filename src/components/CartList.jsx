import { useContext, useState } from "react";
import { PiSliders } from "react-icons/pi";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { WishListContext } from "../layouts/MainLayouts";

const CartList = () => {
  const { cartList, totalCost, removeFromCart, setCartList, setTotalCost } =
    useContext(WishListContext);
  const [sortDescending, setsortedDescending] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleSortClick = () => {
    setsortedDescending((pdt) => !pdt);
  };

  const sortedCartList = sortDescending
    ? [...cartList].sort((a, b) => b.price - a.price)
    : cartList;

  const handleModal = () => {
    setModal(true);
    setCartList([]);
  };

  const handleCloseModal = () => {
    setModal(false);
    navigate("/");
    setTotalCost(0);
  };

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[#0B0B0B] font-bold">Cart</h2>
        <div className="flex justify-between items-center gap-10">
          <p className="text-[#0B0B0B] font-bold">Total Cost: ${totalCost}</p>
          <button
            className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-purple-600 bg-transparent border-inherit text-primary text-lg font-semibold hover:bg-primary hover:text-white"
            onClick={handleSortClick}
          >
            Sort by Price
            <span className="text-2xl">
              <PiSliders />
            </span>
          </button>
          <button
            onClick={handleModal}
            disabled={totalCost === 0}
            className={`flex items-center bg-primary btn text-white rounded-full hover:text-black ${
              totalCost === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      <div>
        {sortedCartList.map((product) => (
          <div className="my-4" key={product.product_id}>
            <div className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
              <div className="flex gap-4">
                <img
                  className="w-64 h-32 rounded-xl"
                  src={product.product_image}
                  alt={product.product_title}
                />
                <div>
                  <h2 className="text-2xl font-semibold text-[#09080F]">
                    {product.product_title}
                  </h2>
                  <p className="text-[#09080F99] text-lg my-3">
                    {product.description}
                  </p>
                  <p className="text-[#09080FCC] text-xl font-semibold">
                    Price: ${product.price}
                  </p>
                </div>
              </div>
              <button
                className="text-4xl text-red-500"
                onClick={() => removeFromCart(product.product_id)}
              >
                <TiDeleteOutline />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="68"
              viewBox="0 0 72 68"
              fill="none"
            >
              <path
                d="M68.1715 39.9631L68.1505 39.9735C65.6826 41.8661 64.6369 45.0869 65.5154 48.0673L65.5258 48.0882C66.927 52.8253 63.4553 57.6041 58.5194 57.7296H58.4986C55.3823 57.8133 52.6425 59.8001 51.6073 62.7386V62.749C49.9549 67.4128 44.3292 69.2427 40.2614 66.4297C37.7355 64.7049 34.3963 64.6149 31.7388 66.4297H31.7284C27.6607 69.2322 22.0347 67.4127 20.3929 62.7384C19.3483 59.7926 16.6126 57.813 13.5017 57.7295H13.4807C8.54508 57.6039 5.07319 52.8252 6.47452 48.0881L6.48492 48.0671C7.36312 45.0867 6.31744 41.866 3.84975 39.9733L3.8288 39.9629C-0.0926719 36.9512 -0.0926719 31.0535 3.8288 28.0419L3.84975 28.0315C6.31744 26.1388 7.36312 22.9179 6.47452 19.9376V19.9167C5.06264 15.1797 8.54494 10.4007 13.4807 10.2753H13.5017C16.6074 10.1916 19.3576 8.20474 20.3929 5.26638V5.25598C22.0345 0.592147 27.6607 -1.23781 31.7284 1.57526H31.7388C34.3007 3.34249 37.6888 3.34249 40.2614 1.57526C44.3701 -1.26213 49.9646 0.620132 51.6073 5.25598V5.26638C52.6425 8.19433 55.3822 10.1918 58.4986 10.2753H58.5194C63.4552 10.4007 66.927 15.1797 65.5258 19.9167L65.5154 19.9376C64.6369 22.9179 65.6826 26.1388 68.1505 28.0315L68.1715 28.0419C72.093 31.0535 72.093 36.9513 68.1715 39.9631Z"
                fill="#3EB655"
              />
            </svg>
            <h3 className="text-2xl font-bold text-[#09080F]">
              Payment Successfully
            </h3>
            <p className="text-lg mt-2">Thanks for purchasing.</p>
            <p>Total: {totalCost}</p>
            <button
              className="btn mt-4 px-4 py-2 w-full rounded-full text-[#09080F]"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartList;
