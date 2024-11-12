import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AllprouctContext } from "../layouts/MainLayouts";
import ProductCategories from "./ProductCategories";
import Products from "./Products";

const Allproucts = ({ categories }) => {
  const allProducts = useContext(AllprouctContext);
  const [selectedCategory, setSelectedCategory] = useState(" All Products");

  const filteredProducts =
    selectedCategory === " All Products"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);
  
  return (
    <div>
      <h1 className="text-black text-5xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="md:grid grid-cols-12 gap-x-10 mt-10">
        <div className="col-span-3">
          <ProductCategories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="col-span-9">
          <div className="grid md:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Products key={product.product_id} product={product} />
              ))
            ) : (
              <p className="text-center col-span-3 mt-20 text-black text-3xl font-bold">
                No Products Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Allproucts.propTypes = {
  categories: PropTypes.array,
};

export default Allproucts;
