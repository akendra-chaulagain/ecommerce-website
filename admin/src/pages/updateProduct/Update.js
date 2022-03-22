import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Update.css";

const Update = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get product according to id from the productRedux
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === path)
  );
  return (
    <>
      <div className="update">
        <Sidebar />

        <div className="container-fluid updateContainer">
          <div className="updatetContainerTitle">
            <h1>Update Product</h1>
            {/* create button */}
          </div>

          <div className="row">
            {/* left side container */}
            <div className="col-md-8 leftSideContainer">
              <form className="productForm">
                {/* product name */}
                <label>Product Name</label>
                <br />
                <textarea type="text" placeholder={product.name} />
                <br />
                {/* product desc */}
                <label>Description</label>
                <br />
                <textarea type="number" placeholder={product.desc} />
                <br />
                {/* category */}
                <label>Category</label>
                <br />
                <input type="text" placeholder={product.cat} />
                <br />
                {/* color */}
                <label>Color</label>
                <br />
                <input type="number" placeholder={product.color} />
                <br />
                {/* price */}
                <label>Price</label>
                <br />

                <input type="text" placeholder={product.price} />
                <br />
                {/* features */}
                <label>Features</label>
                <br />
                <textarea type="text" placeholder={product.feature} />
                <br />
                {/* size */}
                <label>Size</label>
                <br />
                <input type="text" placeholder={product.size} />
                <br />
                {/* stock */}
                <label>inStock</label>
                <br />
                <select>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </form>
            </div>
            {/* right side */}
            <div className="col-md-4 rightSideContainer">
              <div className="productImg">
                <img src={product.img} alt="product_img" />
                <br />
                {/* update button */}
                <button>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
