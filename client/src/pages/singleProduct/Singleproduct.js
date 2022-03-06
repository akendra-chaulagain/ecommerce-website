import React from "react";
import "./SingleProduct.css";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Search from "@material-ui/icons/SearchOutlined";
import Favourite from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SingleProduct = ({ product }) => {
  const [didMount, setDidMount] = useState(false);

  // useEffect(() => {
  //   setDidMount(true);
  //   return () => setDidMount(false);
  // }, []);

  // if (!didMount) {
  //   return null;
  // }

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
    return () =>{
        setgetProductData(null)
    }
  }, [product]);


  return (
    <>
      <div className="singleProduct">
        <img className="img-fluid" src={getProductData.img} alt="img" />
        <div className="info">
          <div className="icons">
            <div className="icon">
              <Favourite />
            </div>
            <div className="icon">
              <Cart />
            </div>
            <div className="icon">
              <Link to={`/product/${getProductData._id}`}>
                <Search />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
