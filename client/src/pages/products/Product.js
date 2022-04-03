import React from "react";
import SingleProduct from "../singleProduct/Singleproduct";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "../../components/search/Search";
import CategorySearch from "../../components/CategorySearch/CategorySearch";
import "./Product.css"

const Product = () => {
  // get location is used to feth data  of an individual category  given user id in the url
  const location = useLocation();
  const path = location.pathname.split("/")[2];

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
        const res = await axios.get(`/products/getall?cat=${path}`);
        setAllProducts(res.data);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, [path]);

  return (
    <>
      {/* import from announcement compomnents */}
      <Announcementt />
      {/* import from navbar compomnents */}
      <Navbar
        setSearchProduct={setSearchProduct}
        setCategoryData={setCategoryData}
      />
      {/* if the user search then  this function will run and  fethc data from the database */}
      {searchProduct ? (
        <>
          <Search data={data} />
        </>
      ) : (
        <>
          {categoryData ? (
            <CategorySearch Allproducts={Allproducts} />
          ) : (
            <>
              {/* all product will shown when search function in not in process */}
              <div className="container-fluid Product">
                <div className="productheader">
                  <h3>RESULTS</h3>
                  <p>
                    Price and other details may vary based on product size and
                    color.
                  </p>
                </div>
                <hr />
                {/* map method is used to show all the products   */}
                <div className="row">
                  {Allproducts?.map((product, i) => (
                    <div className="col-md-3 col-4" key={i}>
                      <SingleProduct index={i} product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
      {/* footer */}
      <Footer />
    </>
  );
};

export default Product;
