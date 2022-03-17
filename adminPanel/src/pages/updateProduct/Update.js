import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Update.css";

const Update = () => {
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
                <label htmlFor="">Product Name</label>
                <br />
                <input type="text" />
                <br />

                <label htmlFor="">Limit</label>
                <br />
                <input type="number" />
                <br />

                <label htmlFor="">Category</label>
                <br />
                <input type="text" />
                <br />

                <label htmlFor="">Size</label>
                <br />
                <input type="number" />
                <br />
                <label htmlFor="">Description</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Features</label>
                <br />
                <input type="text" />
                <br />
              </form>
            </div>
            {/* right side */}
            <div className="col-md-4 rightSideContainer">
              <div className="productImg">
                <img
                  src="https://media.istockphoto.com/photos/two-smartphones-with-blank-screen-soaring-on-dark-background-picture-id1315891458?b=1&k=20&m=1315891458&s=170667a&w=0&h=BUAyjvv1IRqycGAFkcq9-Nqzgv2AfB3XxcfGI9hnR3Y="
                  alt=""
                />
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
