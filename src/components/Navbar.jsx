import { useContext, useState } from "react";
import { IoMdClose, IoMdHeartEmpty, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { WishListContext } from "../layouts/MainLayouts";
import NavItem from "./NavItem";

const Navbar = () => {
  const navigate = useNavigate();
  const { whishList, cartList } = useContext(WishListContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleHeartBtn = () => {
    navigate("/dashboard");
  };
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Statistics", path: "/statistics" },
    { id: 3, name: "Dashboard", path: "/dashboard" },
    { id: 4, name: "Testimonial", path: "/testimonial" },
  ];

  const handleNavLink = () => {
    setOpen(false);
  };

  const navbarBgClass = location.pathname === "/" ? "bg-primary" : "bg-white";

  return (
    <>
      <nav className={`${navbarBgClass} w-full md:p-3 md:rounded-t-xl`}>
        <div className="container mx-auto flex justify-between items-center p-3">
          <div className="order-2 md:order-1">
            <h2
              className={`font-bold text-xl ${
                location.pathname === "/" ? "text-white" : "text-black"
              }`}
            >
              Gadget Heaven
            </h2>
          </div>

          <ul
            className={`flex md:static absolute flex-col md:flex-row md:space-x-8 font-bold order-2 ${
              open
                ? "top-14 shadow-md left-0 rounded-tr-xl rounded-br-xl bg-purple-400 p-5 w-5/6 h-5/6 items-center justify-center space-y-10"
                : "-top-56"
            } duration-1000`}
          >
            {routes.map((route) => (
              <NavItem
                key={route.id}
                route={route}
                handleNavLink={handleNavLink}
              />
            ))}
          </ul>

          <div className="flex space-x-6 text-xl order-3">
            <div className="relative">
              <button   onClick={handleHeartBtn} className="w-8 h-8 flex items-center justify-center bg-white btn-circle hover:bg-purple-200 hover:text-red-500">
                <IoCartOutline />

                <span className="absolute -top-1 -right-1 text-red-500 text-xs font-bold bg-white rounded-full px-1">
                  {cartList.length}
                </span>
              </button>
            </div>
            <div className="relative">
              <button
                onClick={handleHeartBtn}
                className="w-8 h-8 flex items-center justify-center bg-white btn-circle hover:bg-purple-200 hover:text-red-500"
              >
                <IoMdHeartEmpty />

                <span className="absolute -top-1 -right-1 text-red-500 text-xs font-bold bg-white rounded-full px-1">
                  {whishList.length}
                </span>
              </button>
            </div>
          </div>

          <div
            className={`text-3xl font-bold md:hidden ${
              location.pathname === "/" ? "text-white" : "text-black"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
