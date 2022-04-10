import React from "react";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Category.css";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { createCategory } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

const Category = () => {
  const dispatch = useDispatch();

  // usestates for category items
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [selectImage, setSelectImages] = useState(null);
  const [progress, setProgress] = useState();

  // handleSubmitData(firebase)

  const handleSubmitData = (e) => {
    e.preventDefault();

    const storage = getStorage(app);
    const storageRef = ref(storage, selectImage.name);
    const uploadTask = uploadBytesResumable(storageRef, selectImage);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = "Processing..";
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress(progress);
            break;
          case "running":
            setProgress(progress);
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const categorys = { img: downloadURL, title, cat };
          createCategory(categorys, dispatch).then(() => {
            window.location.reload("/category");
          });
        });
      }
    );
  };

  return (
    <>
      <div className="category">
        <Sidebar />

        <div className="categoryContainer">
          <h3 className="text-center">Create Category</h3>
          <form action="">
            <div className="row">
              <div className="col-5 leftSideContainer">
                {/* image */}
                <label>Title</label>
                <div className="catImg">
                  <input
                    type="file"
                    name="img"
                    onChange={(e) => setSelectImages(e.target.files[0])}
                  />
                </div>
                {/* title */}
                <label>Title</label>
                <div className="inputField">
                  <input
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                    autoComplete="off"
                  />
                </div>
                {/* category */}
                <label>Category</label>
                <div className="inputField">
                  <input
                    type="text"
                    name="cat"
                    onChange={(e) => setCat(e.target.value)}
                    placeholder="electronic"
                  />
                </div>
                <button onClick={handleSubmitData}>Create</button>
                <br />
                <br />
                {progress}
              </div>

              <div className="col-5 rightSideContainer mt-4"></div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Category;
