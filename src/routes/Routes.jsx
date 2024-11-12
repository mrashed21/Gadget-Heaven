import { createBrowserRouter } from "react-router-dom";
import ProductDtls from "../components/ProductDtls";
import Error from "../error/Error";
import MainLayouts from "../layouts/MainLayouts";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Testimonial from "../pages/Testimonial";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    loader: () => fetch("../projectData.json"),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:category",
          },
        ],
      },
      {
        path: "/product/:productId",
        element: <ProductDtls />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/testimonial",
        loader: () => fetch("../testimonial.json"),
        element: <Testimonial />,
      },
    ],
  },
]);

export default routes;
