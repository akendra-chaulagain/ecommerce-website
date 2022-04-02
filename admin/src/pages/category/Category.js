import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Category.css";

const Category = () => {
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
                    //   onChange={handleChange}
                  />
                </div>
                {/* title */}
                <label>Title</label>
                <div className="inputField">
                  <input
                    type="text"
                    //   onChange={handleChange}
                    placeholder="title"
                    autoComplete="off"
                  />
                </div>
                {/* category */}
                <label>Category</label>
                <div className="inputField">
                  <input
                    type="text"
                    //   onChange={handleChange}
                    placeholder="electronic"
                  />
                </div>
              </div>

              <div className="col-5 rightSideContainer mt-4">
                <label>Content</label>
                <div className="inputField">
                  <select
                    multiple
                    name="content"
                    // onChange={handleSelect}
                  >
                    {/* {movie.map((data, key) => (
                            <option key={key} value={data._id}>
                              {data.title}
                            </option>
                          ))} */}
                  </select>
                </div>
                <button
                //    onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Category;
