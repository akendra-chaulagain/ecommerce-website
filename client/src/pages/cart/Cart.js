import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Announcementt from "../../components/announcenemt/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { removeproduct } from "../../redux/cartRedux";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Search from "../../components/search/Search";
import CategorySearch from "../../components/CategorySearch/CategorySearch";
import { toast, Zoom } from "react-toastify";

const Cart = () => {
  // user data
  const user = useSelector((state) => state.user.currentUser);
  // get product data
  const cartProduct = useSelector((state) => state.cart.products);
  // cart
  const cart = useSelector((state) => state.cart);

  // /for total ammount
  const subTotal = cartProduct.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );

  // remove cart
  const dispatch = useDispatch();
  const handleRemove = (_id) => {
    dispatch(removeproduct(_id));
    // react toastify for alert option when failure
    toast.success("product deleted!", {
      position: "top-center",
      autoClose: false,
      transition: Zoom,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      theme: "dark",
      progress: undefined,
    });
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
  const [Allproducts, setAllProducts] = useState([]);
  const [categoryData, setCategoryData] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`/products/getall?cat=${categoryData}`);
        setAllProducts(res.data);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, [categoryData]);

  return (
    <>
      {/* announcement */}
      <Announcementt />
      <Navbar
        setSearchProduct={setSearchProduct}
        setCategoryData={setCategoryData}
      />

      {searchProduct ? (
        <Search data={data} />
      ) : (
        <>
          {/* when user search according to category and click in slect section  then this below function wilkl run*/}
          {categoryData ? (
            <CategorySearch Allproducts={Allproducts} />
          ) : (
            <>
              {/* when the cart is empty this code will run */}
              {cartProduct.length > 0 ? (
                <>
                  {/* if the user does not search fro items and does not select item according yo category then this function will get categroy data without searching */}
                  <div className="container-fuid cart">
                    <div className="text-center cartTitle">Your Collection</div>
                    <div className="row mt-1">
                      {/* cart container */}

                      <div className="col-md-9">
                        {cartProduct?.map((item, id) => (
                          <div className="row leftSideCart" key={id}>
                            <div className="col-4 ">
                              <img
                                className="img-fluid"
                                src={item.img}
                                alt=""
                              />
                            </div>
                            <div className="col-7 leftSideproductInfo">
                              <div className="leftsideproductInfodata">
                                {/* product name */}
                                <p>{item.name}</p>
                                {/* product color */}
                                <p>
                                  Color : <span>{item.color}</span>
                                </p>
                                {/* product quantity */}
                                <p>
                                  Quiantity: <span>{item.quantity}</span>
                                </p>
                                {/* remove product */}
                                <button
                                  className="mb-3"
                                  onClick={() => handleRemove(item._id)}
                                >
                                  delete
                                </button>
                              </div>
                            </div>
                            <hr />
                            <div className="totalPrice text-end">
                              <p>
                                price :
                                <span>$ {item.price * item.quantity}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* check box (payment box) */}
                      <>
                        {/* if the user is login is not he/she  need to do login first */}
                        <div className="col-md-3 checkBoxWithoutLogin">
                          <div className="containerInfo">
                            <p>
                              Subtotal ({cart.quantity} item) :
                              <span>$ {subTotal}.00</span>
                              <br />
                              {/* when use is login then  user will directly go to payment method */}
                              {user ? (
                                <>
                                  <Link to="/checkout">
                                    <button>Procced to ckeckout</button>
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <Link to="/login">
                                    <button>Procced to ckeckout</button>
                                  </Link>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="container-fuid cartEmpty">
                    <div className="row emptyContainer">
                      <div className="col-9 emptyWrapper">
                        <div className="row">
                          <div className="col-md-6 cartImg">
                            <img
                              className="img-fluid"
                              src="./img/cart1.png"
                              alt=""
                            />
                          </div>
                          <div className="col-md-6 titleEmpty">
                            <h3>Your Cart is empty</h3>
                            <span>
                              <Link className="link" to="/allproducts">
                                Shop now
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}

      {/* footer */}
      <Footer />
    </>
  );
};

export default Cart;
