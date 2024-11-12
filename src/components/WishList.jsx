import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { WishListContext } from "../layouts/MainLayouts";

const WishList = () => {
  const { whishList, addToCart, setWhishList } = useContext(WishListContext);

  const moveToCart = (product) => {
    addToCart(product);
    setWhishList((addToWish) =>
      addToWish.filter((pdt) => pdt.product_id !== product.product_id)
    );
  };

  return (
    <div>
      <h2 className="text-[#0B0B0B] font-bold text-2xl">Wishlist</h2>
      <div className="mt-4">
        {whishList.map((product) => (
          <div className="my-4" key={product.product_id}>
            <div className="flex justify-between items-center p-4 rounded-xl bg-white shadow-sm">
              <div className="flex gap-4">
                <img
                  className="w-32 h-32 rounded-xl"
                  src={product.product_image}
                  alt={product.product_title}
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#09080F]">
                    {product.product_title}
                  </h2>
                  <p className="text-[#09080F99] text-lg my-2">
                    {product.description}
                  </p>
                  <p className="text-[#09080FCC] text-xl font-semibold">
                    Price: ${product.price}
                  </p>
                  <button
                    onClick={() => moveToCart(product)}
                    className="flex items-center bg-primary text-white px-3 py-1 rounded-full hover:bg-green-500 mt-3"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setWhishList((addToWish) =>
                      addToWish.filter(
                        (pdt) => pdt.product_id !== product.product_id
                      )
                    )
                  }
                  className="text-3xl text-red-500 hover:text-red-700"
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
