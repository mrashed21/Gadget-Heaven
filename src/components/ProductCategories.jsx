import PropTypes from "prop-types";

const ProductCategories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
 
  return (
    <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md p-5">
      <span
        className={`btn rounded-full ${
          selectedCategory === " All Products" ? "bg-primary  text-white" : ""
        }`}
        onClick={() => setSelectedCategory(" All Products")}
      >
        All Products
      </span>
      {categories.map((category) => (
        <span
          className={`btn rounded-full ${
            selectedCategory === category.category
              ? "bg-primary text-white"
              : ""
          }`}
          key={category.id}
          onClick={() => setSelectedCategory(category.category)}
        >
          {category.category}
        </span>
      ))}
    </div>
  );
};

ProductCategories.propTypes = {
  categories: PropTypes.array,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

export default ProductCategories;
