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

  //  Pagination for category
  const [page, setPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currestPost = category.slice(indexOfFirstPage, indexOfLastPage);

  //  this below code will run when the user select the vategory from select box
  const [Allproducts, setAllProducts] = useState([]);
  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall?cat=${categoryData}`);
        setAllProducts(res.data.product);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, [categoryData]);

  // pagination for select page
  // const [selectPage, setselectPage] = useState(1);
  // const [selectPostPerPage, setSelectPostPerPage] = useState(6);

  // const selectOfLastPage = page + selectPostPerPage;
  // const selectOfFirstPage = selectOfLastPage - selectPostPerPage;
  // const selectcurrestPost = Allproducts.slice(
  //   selectOfFirstPage,
  //   indexOfLastPage
  // );

  return (
    <>
      {/* import from announcemrnt compomnents */}
      <Announcementt />
      {/* import from navbar compomnents */}
      <Navbar
        setSearchProduct={setSearchProduct}
        setCategoryData={setCategoryData}
      />
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
          {categoryData ? (
            <>
              {/* if the item is selected from the select option this code will run */}
              <div className="container-fluid Product">
                <div className="row">
                  <>
                    {Allproducts.map((item, id) => (
                      <div className="col-md-3 col-4 searchContainer" key={id}>
                        <Link
                          className="singleproductLink"
                          to={`/products/single/${item._id}`}
                        >
                          <div className="singleProduct">
                            <img
                              className="img-fluid"
                              src={item.img}
                              alt="img"
                            />
                            <div className="productInfo">
                              <p>{item.name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                    {/*  Pagination  for select page*/}
                    {/* <div className=" Pagination">
                      <div className=" PaginationInfo">
                        <Pagination
                          onChange={(value) => setselectPage(value)}
                          pageSize={postPerPage}
                          total={total}
                          current={selectPage}
                        />
                      </div>
                    </div> */}
                  </>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* if the item is not selected from the select option then only category section will show */}
              <div className="container-fluid category">
                <div className="row">
                  {/* map of category */}
                  {currestPost?.map((item, id) => (
                    <div className=" col-lg-3 col-6 category_box" key={id}>
                      <SingleCategory item={item} />
                    </div>
                  ))}
                </div>
              </div>
              {/*  Pagination  for category*/}
              <div className=" Pagination">
                <div className=" PaginationInfo">
                  <Pagination
                    onChange={(value) => setPage(value)}
                    pageSize={postPerPage}
                    total={total}
                    current={page}
                  />
                </div>
              </div>
            </>
          )}

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
