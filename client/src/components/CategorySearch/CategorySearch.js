import React from "react";
import { Link } from "react-router-dom";
import "./CategorySearch.css";

const CategorySearch = ({ Allproducts }) => {
  return (
    <>
      <div className="container-fluid CategorySearchProduct">
        <div className="row">
          <>
            {Allproducts?.map((item, id) => (
              <div className="col-md-3 col-4" key={id}>
                <Link
                  className="categoiryProductLink"
                  to={`/products/single/${item._id}`}
                >
                  <div className="categoryAllProduct">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <div className="productInfo">
                      <p className="name">{item.name}</p>
                      <p className="price">$ {item.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CategorySearch;
