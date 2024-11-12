import { useState } from "react";
import { Helmet } from "react-helmet";
import CartList from "../components/CartList";
import WishList from "../components/WishList";
const Dashboard = () => {
  const [showCart, setShowCart] = useState(true);
  return (
    <>
      <Helmet>
        <title>Dashboard - Gadget Heaven</title>
      </Helmet>
      <div className="bg-primary px-20 py-10">
        <h2 className="text-center text-white font-bold text-3xl">Dashboard</h2>
        <p className="text-white text-center my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex items-center justify-center gap-3 ">
          <button
            className={`px-5 py-1 rounded-full text-lg font-semibold border ${
              showCart ? "bg-white text-primary" : "bg-primary text-white"
            }`}
            onClick={() => setShowCart(true)}
          >
            Cart
          </button>
          <button
            className={`px-5 py-1 rounded-full text-lg font-semibold border ${
              !showCart ? "bg-white text-primary" : "bg-primary text-white"
            }`}
            onClick={() => setShowCart(false)}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="px-20 py-10">
        {showCart ? <CartList /> : <WishList />}
      </div>
    </>
  );
};

export default Dashboard;
