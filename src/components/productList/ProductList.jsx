import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../common/data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire. My Motto.</h1>
        <p className="pl-desc">
          I love creating websites. Fell in love with front end long before, but
          recently decided to pursue it. Would love if you could go through my
          work and provide feedback.
          {/* Any kind of feedback whether critisism or
          appreciation is highly valuable to me. Please feel free to reach out
          to me. */}
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
