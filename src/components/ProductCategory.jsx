import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProductCategory = ({ categories }) => {
  return (
    <NavLink
      to={`/category/:${categories.category}`}
      className={({ isActive }) =>
        `btn w-full rounded-full ${isActive ? "text-red-400" : "text-black"}`
      }
    >
      {categories.category}
    </NavLink>
  );
};

ProductCategory.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default ProductCategory;
