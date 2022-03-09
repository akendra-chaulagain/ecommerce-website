import React from "react";
import "./Product.css";
import SingleProduct from "../singleProduct/Singleproduct";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = () => {
  // get location is used to feth data  of an individual category  given user id in the url
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  //   get data according to id given in url
  const [getCategory, setGetCategory] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/categories/find/" + path);
        setGetCategory(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [path]);

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
              {getCategory?.map((product, i) => (
                <div className="col-md-3 col-4" key={i}>
                  <SingleProduct index={i} product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {/* footer */}
      <Footer />
    </>
  );
};

export default Product;
