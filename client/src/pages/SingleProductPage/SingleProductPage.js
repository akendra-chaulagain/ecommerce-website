import React from "react";
import Footer from "../../components/footer/Footer";
import "./SingleProductPage.css";
import { useState } from "react";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
  // usestate fro quantity
  const [quantity, setQuantity] = useState(1);

  // get product according to id  from the url
  const [product, setProduct] = useState({});

  //   uselocation nis used to get id from the url
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  // useffect
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/products/find/" + path);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [path]);

  // increase and decrease quantity  when add or less button click
  const handleQuantity = (type) => {
    if (type === "desc") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <Announcementt />
      <Navbar />
      <div className="container-fluid singlePage">
        <div className="row">
          <div className="col-md-6 leftSideImg">
            <img src={product.img} alt="" />
          </div>
          <div className="col-md-6 rightSide">
            <div className="productTitle">{product.name}</div>
            <div className="productdesc">
              <span className="productPrice"> Price : {product.price}</span>

              <div className="productSize">
                {/* map of color product */}
                <span>Color :</span>
                <select>
                  {product.color?.map((item, key) => (
                    <option key={key}>{item}</option>
                  ))}
                </select>

                {/* stock */}
                <span>
                  <p> {product.stock}</p>{" "}
                </span>

                {/* Brand name */}
                <span>
                  Brand: <p>{product.brand}</p>
                </span>
              </div>

              {/* increase or decrease number */}
              <div className="increaseAnddecrease">
                <button onClick={() => handleQuantity("desc")}>-</button>
                <span className="number">{quantity}</span>
                <button onClick={() => handleQuantity("inc")}>+</button>
              </div>

              <div className="addtoCard">
                <button>ADD TO CART</button>
              </div>
              <h4 className="mt-5">: {product.desc}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default SingleProductPage;
