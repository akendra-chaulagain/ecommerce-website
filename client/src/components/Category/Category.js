import React from "react";
import SingleCategory from "../SingleCategory/SingleCategory";
import "./Category.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Announcementt from "../announcenemt/Announcement";
import Navbar from "../navbar/Navbar";

const Category = ({ category }) => {
  const user = useSelector((state) => state.user.currentUser);

  // usestate for search
  const [searchProduct, setSearchProduct] = useState("");
  const [data, setData] = useState("");

  // search bar
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/products/search?q=${searchProduct}`);
        setData(res.data);
      } catch (error) {
        console.log("unable to search" + error);
      }
    };
    getProduct();
  }, [searchProduct]);

  return (
    <>
      {/* import from announcemrnt compomnents */}
      <Announcementt />
      {/* import from navbar compomnents */}
      <Navbar setSearchProduct={setSearchProduct} />
      {/* if the user search then  this function will run and  fethc data from the database */}
      {searchProduct ? (
        <>
          <div className="container-fluid Product">
            <div className="row">
              {data.map((item, id) => (
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
            </div>
          </div>
        </>
      ) : (
        <>
          {/* if the user does not search fro items then this function will get categroy data without searching */}
          <div className="container-fluid category">
            <div className="row">
              {/* map of category */}
              {category?.map((item, id) => (
                <div className=" col-lg-3 col-6 category_box" key={id}>
                  <SingleCategory item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* recommondation */}
          {!user && (
            <div className=" reconmondation">
              <div className=" reconmondationInfo">
                <hr />
                <h5>See personalized recommendations</h5>

                {/* sign in button */}
                <div className="loginbtn">
                  <Link to="/login">
                    <button>Sign-In</button>
                  </Link>
                </div>

                <p>
                  New customer?
                  <Link className="link" to="/register">
                    <span>Start here.</span>
                  </Link>
                </p>
                <hr />
              </div>
            </div>
          )}
        </>
      )}

      <hr />
    </>
  );
};

export default Category;
