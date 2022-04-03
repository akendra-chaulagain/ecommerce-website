import React from "react";
import "./SingleCategory.css";
import { Link } from "react-router-dom";

const SingleCategory = ({ item }) => {
  return (
    <>
      <Link className="link-item" to={`products/${item.cat}`}>
        <div className="category-box">
          <div className="wrapperContainer">
            <div className="categortTitle">{item.title}</div>
            <img className="img-fluid" src={item.img} alt="item_img" />
            <div className="category-box-info">
              <p>Shop Now</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleCategory;
