import React from "react";
import { Link } from "react-router-dom";
import "./CategorySearch.css";

const CategorySearch = ({ Allproducts }) => {
  return (
    <>
      <div className="container-fluid CategorySearchProduct">
        <div className="row">
          <>
            {Allproducts.map((item, id) => (
              <div className="col-md-3 col-4 searchContainer" key={id}>
                <Link
                  className="singleproductLink"
                  to={`/products/single/${item._id}`}
                >
                  <div className="singleProduct">
                    <img className="img-fluid" src={item.img} alt="img" />
                    <div className="productInfo">
                      <p>{item.name}</p>
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
