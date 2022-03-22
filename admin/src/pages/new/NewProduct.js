import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { createProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // usestates for all inputes
  const [inputes, setInputes] = useState({});
  const [selectImage, setSelectImages] = useState(null);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [progress, setProgress] = useState();

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

  // handleSubmitData(firebase)
  const handleSubmitData = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + selectImage.name;
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
          const product = { ...inputes, img: downloadURL, color, size };
          createProducts(product, dispatch);
          navigate("/product");
        });
      }
    );
  };

  return (
    <>
      <div className="newProduct">
        <Sidebar />

        <div className="container-fluid newProductContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="mewproductTitle">Create New product</div>

              <form className="addproductForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6">
                    <div className="mt-3">
                      {/* images */}
                      <label>Image</label>
                      <br />
                      <input
                        type="file"
                        id="img"
                        required
                        onChange={(e) => setSelectImages(e.target.files[0])}
                      />
                    </div>
                    {/* product name */}
                    <div className="inputField">
                      <label>product Username</label>
                      <br />
                      <textarea
                        type="text"
                        autoComplete="off"
                        name="name"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    {/* desc */}
                    <div className="inputField">
                      <label>Description</label>
                      <br />
                      <textarea
                        type="text"
                        name="desc"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                    {/* features */}
                    <div className="inputField">
                      <label>Features</label>
                      <br />
                      <textarea
                        type="text"
                        required
                        name="feature"
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                    {/* price */}
                    <div className="inputField">
                      <label>Price</label>
                      <br />
                      <input
                        type="number"
                        name="price"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                    {/* category */}
                    <div className="inputField">
                      <label>Category</label>
                      <br />
                      <input
                        type="text"
                        required
                        name="cat"
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* right side container */}
                  <div className="col-md-6">
                    {/* color */}
                    <div className="inputField">
                      <label>Color</label>
                      <br />
                      <input
                        type="text"
                        name="color"
                        required
                        autoComplete="off"
                        onChange={handleColor}
                      />
                    </div>
                    {/* size */}
                    <div className="inputField">
                      <label>Size</label>
                      <br />
                      <input
                        type="text"
                        name="size"
                        required
                        autoComplete="off"
                        onChange={handleSize}
                      />
                    </div>
                    {/* brand */}
                    <div className="inputField">
                      <label>Brand</label>
                      <br />
                      <input
                        type="text"
                        name="brand"
                        required
                        autoComplete="off"
                        onChange={handleChange}
                      />
                    </div>
                    {/* stock */}
                    <div className="inputField">
                      <label>inStock ?</label>
                      <br />
                      <select name="stock" id="active" onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </div>

                    {/* create btn */}
                    <div className="createnewButton">
                      {/* <button  onClick={handleSubmit} >Create</button> */}
                      <button onClick={handleSubmitData}>Create</button>
                      <br />
                      <br />
                      {progress}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
