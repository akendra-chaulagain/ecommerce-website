import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SingleProduct = ({ product }) => {
  //   get product data according to id
  const [getProductData, setgetProductData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/products/find/" + product);
        setgetProductData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      setgetProductData({});
    };
  }, [product]);

  // single product page
  return (
    <>
      <Link
        className="singleproductLink"
        to={`/products/single/${getProductData._id}`}
      >
        <div className="singleProduct">
          <img className="img-fluid" src={getProductData.img} alt="img" />
          <div className="productInfo">
            <p>{getProductData.name}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleProduct;
