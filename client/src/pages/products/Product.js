import React from "react";
import "./Product.css";
import SingleProduct from "../singleProduct/Singleproduct";
import Footer from "../../components/footer/Footer";
import ProductFilter from "../../components/productFilter/ProductFilter";
import { useLocation } from "react-router-dom";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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

  return (
    <>
      {/* import from announcemrnt compomnents */}
      <Announcementt />
      {/* import from navbar compomnents */}
      <Navbar />
      <ProductFilter path={getCategory.title} />
      <div className="container-fluid Product">
        <div className="row">
          {getCategory?.map((product, i) => (
            <div className="col-md-3" key={i}>
              <SingleProduct index={i} product={product} />
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Product;
