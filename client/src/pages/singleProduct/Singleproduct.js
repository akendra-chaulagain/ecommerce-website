import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <>
      <Link
        className="singleproductLink"
        to={`/products/single/${product._id}`}
      >
        <div className="singleProduct">
          <img className="img-fluid" src={product.img} alt="img" />
          <div className="SingleproductInfo">
            <p className="name">{product.name}</p>
            <p className="price">Rs. {product.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleProduct;
