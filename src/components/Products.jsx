import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const handlShowDtl = () => {
    navigate(`/product/${product.product_id}`);
  };
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure className="p-4">
        <img
          src={product.product_image}
          alt="product"
          className="rounded-xl shadow-md w-full h-60 object-cover"
        />
      </figure>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-semibold text-[#09080F]">
          {product.product_title}
        </h2>

        <p className="my-3">Price: {product.price}</p>

        <div className="card-actions mt-auto">
          <button
            className=" px-3 py-2 rounded-full border-2 border-purple-600 bg-transparent border-inherit text-primary text-lg font-semibold hover:bg-primary hover:text-white "
            onClick={handlShowDtl}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
Products.propTypes = {
  product: PropTypes.object,
};
export default Products;
