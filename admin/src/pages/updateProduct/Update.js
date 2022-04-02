import { Publish } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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

  // update product
  const [inputes, setInputes] = useState({});
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [progress, setProgress] = useState();

  // for inputes
  const handleChange = (e) => {
    setInputes((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // for color
  const handleColor = (e) => {
    setColor(e.target.value.split(","));
  };
  // for size
  const handleSize = (e) => {
    setSize(e.target.value.split(","));
  };

  // preview img on select
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

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
                <textarea
                  name="name"
                  type="text"
                  placeholder={product.name}
                  onChange={handleChange}
                />
                <br />
                {/* product desc */}
                <label>Description</label>
                <br />
                <textarea
                  name="desc"
                  type="text"
                  placeholder={product.desc}
                  onChange={handleChange}
                />
                <br />
                {/* category */}
                <label>Category</label>
                <br />
                <input
                  name="cat"
                  type="text"
                  placeholder={product.cat}
                  onChange={handleChange}
                />
                <br />
                {/* color */}
                <label>Color</label>
                <br />
                <input
                  name="color"
                  type="text"
                  placeholder={product.color}
                  onChange={handleColor}
                />
                <br />
                {/* price */}
                <label>Price</label>
                <br />

                <input
                  name="price"
                  type="number"
                  placeholder={product.price}
                  onChange={handleChange}
                />
                <br />
                {/* features */}
                <label>Features</label>
                <br />
                <textarea
                  name="feature"
                  type="text"
                  placeholder={product.feature}
                  onChange={handleChange}
                />
                <br />
                {/* size */}
                <label>Size</label>
                <br />
                <input
                  type="text"
                  name="size"
                  placeholder={product.size}
                  onChange={handleSize}
                />
                <br />
                {/* stock */}
                <label>inStock</label>
                <br />
                <select name="stock" onChange={handleChange}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </form>
            </div>
            {/* right side for select img and update button- */}
            <div className="col-md-4 rightSideContainer">
              <div className="productImg">
                {/* slelect img */}

                <label htmlFor="file">
                  <Publish />
                  <input
                    type="file"
                    id="file"
                    onChange={onSelectFile}
                    style={{ display: "none" }}
                  />
                  {/* select file is selected then this code will run */}
                  {selectedFile ? (
                    <>
                      <img src={preview} alt="select_img" />
                    </>
                  ) : (
                    <>
                      <img src={product.img} alt="product_img" />
                    </>
                  )}
                </label>

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
