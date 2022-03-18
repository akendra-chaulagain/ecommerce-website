import React from "react";
import Footer from "../../components/footer/Footer";
import "./SingleProductPage.css";
import { useState } from "react";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addproduct } from "../../redux/cartRedux";

const SingleProductPage = () => {
  const dispatch = useDispatch();

  // usestate fro quantity
  const [quantity, setQuantity] = useState(1);

  // usestate for color
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

  // this function will run when we  add to cart button click
  const handleClick = async () => {
    dispatch(addproduct({ ...product, quantity, color }));
  };

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
  const [AllproductsCat, setAllProductscat] = useState([]);
  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall?cat=${categoryData}`);
        setAllProductscat(res.data.product);
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
          {categoryData ? (
            <>
              {/* if the item is selected from the select option this code will run */}
              <div className="container-fluid Product">
                <div className="row">
                  <>
                    {AllproductsCat.map((item, id) => (
                      <div className="col-md-3 col-4 searchContainer" key={id}>
                        <Link
                          className="singleproductLink"
                          to={`/products/single/${item._id}`}
                        >
                          <div className="singleProduct">
                            <img
                              className="img-fluid"
                              src={item.img}
                              alt="img"
                            />
                            <div className="productInfo">
                              <p>{item.name}</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* if the user does not search fro items then this function will get categroy data without searching */}
              <div className="container-fluid singlePage">
                <div className="row">
                  <div className="col-md-5 leftSideImg">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="col-md-7 rightSide">
                    <div className="productTitle">{product.name}</div>
                    <div className="productdesc">
                      <span className="productPrice">
                        Price :
                        <span style={{ color: "red" }}>$ {product.price}</span>
                      </span>

                      <div className="productSize">
                        {/* map of color product */}
                        <span>Color :</span>
                        <select
                          className="selectBox"
                          onChange={(e) => setColor(e.target.value)}
                        >
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
                        <button onClick={() => handleQuantity("desc")}>
                          -
                        </button>
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
            </>
          )}
        </>
      )}

      {/* footer */}
      <Footer />
    </>
  );
};

export default SingleProductPage;
