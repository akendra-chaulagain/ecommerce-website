import React from "react";
import Footer from "../../components/footer/Footer";
import "./SingleProductPage.css";
import { useState } from "react";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/cartRedux";

const SingleProductPage = () => {
  const dispatch = useDispatch();

  // usestate fro quantity
  const [quantity, setQuantity] = useState(1);

  // usestate fro color
  const [color, setColor] = useState("");

  // get product according to id  from the url
  const [product, setProduct] = useState({});

  //   uselocation is used to get id from the url
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

  // this function will run when we click add to cart button
  const handleClick = async () => {
    dispatch(addproduct({ ...product, quantity, color }));
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
              <span className="productPrice">
                Price : <span style={{ color: "red" }}>$ {product.price}</span>
              </span>

              <div className="productSize">
                {/* map of color product */}
                <span>Color :</span>
                <select className="selectBox" onChange={(e) => setColor(e.target.value)}>
                  {product.color?.map((item, key) => (
                    <option key={key}>{item}</option>
                  ))}
                </select>

                {/* stock */}
                <span>
                  <p> {product.stock}</p>
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
                <button onClick={handleClick}>ADD TO CART</button>
              </div>
              <div className="singlrproductDesc">
                <p className="mt-5">: {product.desc}</p>
              </div>
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
