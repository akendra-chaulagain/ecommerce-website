import { Publish } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Update.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { updateProducts } from "../../redux/apiCalls";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // location is used to get url data
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get product according to id from the productRedux
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === path)
  );
  const id = product._id;
  // update product
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [feature, setFeature] = useState("");
  const [stock, setStock] = useState(false);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [brand, setBrand] = useState();
  const [progress, setProgress] = useState();

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
  // const products = {
  //   name,
  //   desc,
  //   cat,
  //   price,
  //   color,
  //   stock,
  //   size,
  //   brand,
  //   feature,
  // };

  const handleSubmitData = (e) => {
    e.preventDefault();
    updateProducts(
      id,
      dispatch,
      product,
      name,
      desc,
      cat,
      price,
      color,
      stock,
      size,
      brand,
      feature
    );

    // const fileName = new Date().getTime() + selectedFile.name;
    // const Storage = getStorage(app);
    // const storageRef = ref(Storage, fileName);
    // const uploadTask = uploadBytesResumable(storageRef, selectedFile);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {

    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     setProgress(progress + "% done");
    //     switch (snapshot.state) {
    //       case "paused":
    //         setProgress(progress + "% done");
    //         break;
    //       case "running":
    //         setProgress(progress + "% done");
    //         break;
    //       default:
    //     }
    //   },
    //   (error) => {},
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       const product = {
    //         img: downloadURL,
    //         name,
    //         price,
    //         cat,
    //         feature,
    //         color,
    //         size,
    //         desc,
    //         stock,
    //         selectedFile,
    //         brand,
    //       };
    //       updateProducts( product, dispatch);
    //       navigate("/product");
    //     });
    //   }
    // );
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
          <form className="productForm">
            <div className="row">
              {/* left side container */}
              <div className="col-md-6 leftSideContainer">
                {/* product name */}
                <label>Product Name</label>
                <br />
                <textarea
                  type="text"
                  placeholder={product.name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                {/* product desc */}
                <label>Description</label>
                <br />
                <textarea
                  type="text"
                  placeholder={product.desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <br />
                {/* category */}
                <label>Category</label>
                <br />
                <input
                  type="text"
                  placeholder={product.cat}
                  onChange={(e) => setCat(e.target.value)}
                />
                <br />
                {/* color */}
                <label>Color</label>
                <br />
                <input
                  type="text"
                  placeholder={product.color}
                  onChange={handleColor}
                />
                <br />
                {/* price */}
                <label>Price</label>
                <br />

                <input
                  type="number"
                  placeholder={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <br />
                {/* features */}
                <label>Features</label>
                <br />
                <textarea
                  type="text"
                  placeholder={product.feature}
                  onChange={(e) => setFeature(e.target.value)}
                />
                <br />
                {/* size */}
                <label>Size</label>
                <br />
                <input
                  type="text"
                  placeholder={product.size}
                  onChange={handleSize}
                />
                <br />
                {/* brand */}
                <label>Brand</label>
                <br />
                <input
                  type="text"
                  placeholder={product.size}
                  onChange={(e) => setBrand(e.target.value)}
                />
                <br />

                {/* stock */}
                <label>inStock</label>
                <br />
                <select onChange={(e) => setStock(e.target.value)}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
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
                  <button onClick={handleSubmitData}>Update</button>
                  <br />
                  <br />
                  <p>{progress}</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
