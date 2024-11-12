import { createContext, useState } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
// eslint-disable-next-line react-refresh/only-export-components
export const AllprouctContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const WishListContext = createContext();
const MainLayouts = () => {
  const location = useLocation();
  const allProducts = useLoaderData();
  const [cartList, setCartList] = useState([]);
  const [whishList, setWhishList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  /* add to cart */
  const addToCart = (product) => {
    const isExistToCart = cartList.find(
      (pdt) => pdt.product_id === product.product_id
    );
    if (isExistToCart) {
      toast.warn("Already added to cart!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      setCartList((addedCart) => {
        const updatedCartList = [...addedCart, product];
        const newTotalCost = totalCost + product.price;
        setTotalCost(newTotalCost);
        toast.success("Added to cart successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return updatedCartList;
      });
    }
  };

  /* remove form cart */
  const removeFromCart = (productId) => {
    setCartList((removedCart) => {
      const updatedRemovedList = removedCart.filter(
        (pdt) => pdt.product_id !== productId
      );
      const product = removedCart.find((pdt) => pdt.product_id === productId);
      if (product) {
        setTotalCost(totalCost - product.price);
      }
      return updatedRemovedList;
    });
  };
  /* add to wishlist */
  const addToWishList = (product) => {
    const isExistToWish = whishList.find(
      (pdt) => pdt.product_id === product.product_id
    );
    if (isExistToWish) {
      toast.warn("Already added to wishlist!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    } else {
      setWhishList([...whishList, product]);
      toast.success("Added to wishlist successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="bg-custom-gray  max-w-7xl mx-auto">
      <WishListContext.Provider
        value={{
          cartList,
          addToCart,
          removeFromCart,
          whishList,
          addToWishList,
          totalCost,
          setWhishList,
          setCartList,
          setTotalCost,
        }}
      >
        <div className={location.pathname === "/" ? "md:pt-5 md:px-10" : ""}>
          <Navbar />
          <AllprouctContext.Provider value={allProducts}>
            <Outlet />
          </AllprouctContext.Provider>
        </div>
      </WishListContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
