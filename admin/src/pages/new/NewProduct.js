import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewProduct.css";

const NewProduct = () => {
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
                      <label htmlFor="">Image</label>
                      <br />
                      <input type="file" id="img" name="img" />
                    </div>

                    <div className="inputField">
                      <label htmlFor="">Title</label>
                      <br />
                      <input type="text" name="title" autoComplete="off" />
                    </div>
                    <div className="inputField">
                      <label htmlFor="">product Username</label>
                      <br />
                      <input type="text" autoComplete="off" />
                    </div>

                    <div className="inputField">
                      <label htmlFor="">Description</label>
                      <br />
                      <input type="text" name="desc" autoComplete="off" />
                    </div>

                    <div className="inputField">
                      <label htmlFor="">Price</label>
                      <br />
                      <input type="number" name="year" autoComplete="off" />
                    </div>
                    <div className="inputField">
                      <label htmlFor="">Category</label>
                      <br />
                      <input type="text" name="genre" autoComplete="off" />
                    </div>
                  </div>
                  {/* right side */}
                  <div className="col-md-6">
                    <div className="inputField">
                      <label htmlFor="">Size</label>
                      <br />
                      <input type="number" name="limit" autoComplete="off" />
                    </div>
                    <div className="inputField">
                      <label htmlFor="">Brand</label>
                      <br />
                      <input type="text" name="duration" autoComplete="off" />
                    </div>
                    <div className="inputField">
                      <label htmlFor="">Is ?</label>
                      <br />
                      <select name="isSeries" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* <div className="inputField">
                                        <label htmlFor="">Video</label><br />
                                        <input type="file" name='video'
                                            onChange={(e) => setVideo(e.target.files[0])}
                                        />
                                    </div> */}

                    {/* create btn */}
                    <div className="createnewButton">
                      {/* <button  onClick={handleSubmit} >Create</button> */}

                      <div className="createButton">
                        <button>Create</button>
                      </div>
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
