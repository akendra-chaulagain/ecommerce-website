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
import { Pagination } from "antd";
import Search from "../search/Search";
import CategorySearch from "../CategorySearch/CategorySearch";

const Category = ({ category, total }) => {
  const user = useSelector((state) => state.user.currentUser);

  // usestate for search
  const [searchProduct, setSearchProduct] = useState("");
  const [data, setData] = useState("");
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

  //  this below code will run when the user select the category from select box
  const [Allproducts, setAllProducts] = useState([]);
  const [categoryData, setCategoryData] = useState("");
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall?cat=${categoryData}`);
        setAllProducts(res.data);
      } catch (error) {
        console.log("unable to get product");
      }
    };
    getOrders();
  }, [categoryData]);

  return (
    <>
      {/* import from announcemrnt compomnents */}
      <Announcementt />
      {/* import from navbar compomnents */}
      <Navbar
        setSearchProduct={setSearchProduct}
        setCategoryData={setCategoryData}
      />
      {/* if the user search product  then  this function will run and  fetch data from the database */}
      {searchProduct ? (
        <>
          {/* import from search components */}
          <Search data={data} />
        </>
      ) : (
        <>
          {/* if the user does not search for items then this function will get categroy data without searching */}
          {categoryData ? (
            <>
              {/* if the item is selected from the select option this code will run  whichn is import from CategorySearch component*/}
              <CategorySearch Allproducts={Allproducts} />
            </>
          ) : (
            <>
              {/* if the item is not selected from the select option then only category section will show */}
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
            </>
          )}

          {/* this code will run when the user is new this function recomend the user to login or register */}
          {!user && (
            <div className=" reconmondation">
              <div className=" reconmondationInfo">
                <hr />
                <h5>See personalized recommendations</h5>

                {/* sign in button  */}
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
