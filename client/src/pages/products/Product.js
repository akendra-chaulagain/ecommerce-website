import React from "react";
import "./Product.css";
import { productLists } from "../../data";
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
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  //   get data according to id given in url
  const [getCategory, setGetCategory] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/categories/find/" + path);
        setGetCategory(res.data.content);
        // console.log(res.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [path]);

//   get product data according to id
const [getProductData, setgetProductData] = useState({});
useEffect(() => {
  const getData = async () => {
    try {
      const res = await axios.get("/products/find/" + setGetCategory);
      setgetProductData(res.data);
      console.log(res.data.content);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
}, [path]);
console.log(getProductData);



  return (
    <>
      <Announcementt />
      <Navbar />
      {/* product filter import from product filter components */}
      <ProductFilter path={getCategory.title} />
      <div className="container-fluid Product">
        <div className="row">
          {productLists?.map((product, id) => (
            <div className="col-md-3" key={id}>
              <SingleProduct product={product} />
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
