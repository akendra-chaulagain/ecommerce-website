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
  const [name, setName] = useState(product.name);
  const [desc, setDesc] = useState(product.desc);
  const [cat, setCat] = useState(product.cat);
  const [price, setPrice] = useState(product.price);
  const [feature, setFeature] = useState(product.feature);
  const [stock, setStock] = useState(product.stock);
  const [color, setColor] = useState([product.color]);
  const [size, setSize] = useState([product.size]);
  const [brand, setBrand] = useState(product.brand);
  const [selectImage, setSelectImages] = useState(null);

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
  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();
  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(selectedFile);
  //     return;
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile);
  //   setPreview(objectUrl);
  //   return () => URL.revokeObjectURL(objectUrl);
  // }, [selectedFile]);

  // const onSelectFile = (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setSelectedFile(undefined);
  //     return;
  //   }
  //   setSelectedFile(e.target.files[0]);
  // };

  // this function will run when ypdate button is clicked
  const handleSubmitData = (e) => {
    // const ak = () => {
    //   if (selectedFile) {
    //     return selectedFile;
    //   } else {
    //     return product.img;
    //   }
    // };
    e.preventDefault();
    const fileName = new Date().getTime() + selectImage;
    const Storage = getStorage(app);
    const storageRef = ref(Storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, selectImage);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress + "% done");
        switch (snapshot.state) {
          case "paused":
            setProgress(progress + "% done");
            break;
          case "running":
            setProgress(progress + "% done");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            img: downloadURL,
            color,
            size,
            desc,
            name,
            cat,
            brand,
            price,
            feature,
            stock,
          };
          // update  function(send id ,product and dispatch to apicall update product function)
          updateProducts(id, product, dispatch);
          navigate("/product");
        });
      }
    );
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
                {/* features */}
                <label>Features</label>
                <br />
                <textarea
                  type="text"
                  placeholder={product.feature}
                  onChange={(e) => setFeature(e.target.value)}
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
                {/* price */}
                <label>Price</label>
                <br />

                <input
                  type="number"
                  placeholder={product.price}
                  onChange={(e) => setPrice(e.target.value)}
                />

                <br />
              </div>
              {/* right side for select img and update button- */}
              <div className="col-md-4 rightSideContainer">
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
                  placeholder={product.brand}
                  onChange={(e) => setBrand(e.target.value)}
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
                {/* stock */}
                <label>inStock</label>
                <br />
                <select onChange={(e) => setStock(e.target.value)}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>

                <div className="productImg mt-5">
                  {/* slelect img */}
                  <label htmlFor="file">
                    <Publish />
                    <input
                      type="file"
                      id="file"
                      name="img"
                      // onChange={onSelectFile}
                      onChange={(e) => setSelectImages(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                    <img src={product.img} alt="product_img" />

                    {/* select file is selected then this code will run */}
                    {/* {selectedFile ? (
                      <>
                        <img src={preview} alt="select_img" />
                      </>
                    ) : (
                      <>
                        <img src={product.img} alt="product_img" />
                      </>
                    )} */}
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
