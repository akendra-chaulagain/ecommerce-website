import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./AllProduct.css";
import { Pagination } from "antd";
import Search from "../../components/search/Search";
import CategorySearch from "../../components/CategorySearch/CategorySearch";

const AllProduct = () => {
  // get all products
  const [AllproductsData, setAllProductsData] = useState([]);
  const [totalProduct, setTotalProduct] = useState("");
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall`);
        setAllProductsData(res.data.product);
        setTotalProduct(res.data.product.length);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, []);

  // usestate fro pagination
  const [page, setPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);
  // function fro pagination
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currestPost = AllproductsData.slice(indexOfFirstPage, indexOfLastPage);

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

  //  this below code will run when the user select the category from select box
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

  return (
    <>
      <Announcementt />
      <Navbar
        setSearchProduct={setSearchProduct}
        setCategoryData={setCategoryData}
      />
      <div className="container-fluid allproductContainer">
        <div className="row">
          {/* if the porduct is search and foud in database then this function will run */}
          {searchProduct ? (
            <Search data={data} />
          ) : (
            <>
              {/* when the search product is not found then this function will run */}
              {categoryData ? (
                <>
                  {/* if the item is selected from the select option this code will run */}
                  <CategorySearch Allproducts={Allproducts} />
                </>
              ) : (
                <>
                  {currestPost?.map((item, i) => (
                    <div className="col-md-3 col-4" index={i} key={i}>
                      <Link
                        className="AllproductLink"
                        to={`/products/single/${item._id}`}
                      >
                        <div className="allProduct">
                          <img className="img-fluid" src={item.img} alt="img" />
                          <div className="productInfo">
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  {/*  Pagination */}
                  <div className=" Pagination">
                    <div className=" PaginationInfo">
                      <Pagination
                        onChange={(value) => setPage(value)}
                        pageSize={postPerPage}
                        total={totalProduct}
                        current={page}
                      />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AllProduct;
