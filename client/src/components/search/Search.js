import { Link } from "react-router-dom";
import React from "react";
import "./Search.css";

const Search = ({ data }) => {
  return (
    <>
      {/* search container */}
      <div className="container-fluid SearchProduct">
        <div className="row">
          {data.map((item, id) => (
            <div className="col-md-3 col-4 searchContainer" key={id}>
              <Link
                className="singleproductLink"
                target="_blank"
                to={`/products/single/${item._id}`}
              >
                <div className="singleProduct">
                  <img className="img-fluid" src={item.img} alt="product_img" />
                  <div className="productInfoSearch">
                    <p className="name">{item.name}</p>
                    <p className="price">$ {item.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
