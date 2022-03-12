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

const AllProduct = () => {
  // usestate fro pagination
  const [totalProduct, setTotalProduct] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(6);

  // get all products
  const [Allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall`);
        setAllProducts(res.data.product);
        setTotalProduct(res.data.product.length);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, []);

  // function fro pagination
  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currestPost = Allproducts.slice(indexOfFirstPage, indexOfLastPage);

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
      <Announcementt />
      <Navbar setSearchProduct={setSearchProduct} />
      <div className="container-fluid allproductContainer">
        <div className="row">
          {/* if the porduct is search and fond in database then this function will run */}
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
              {/* when the search product is not found then this function will run */}
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
            </>
          )}

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
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default AllProduct;
