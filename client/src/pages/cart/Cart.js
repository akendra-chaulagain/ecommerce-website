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

const Cart = () => {
  // user data
  const user = useSelector((state) => state.user.currentUser);

  // get product data
  const cartProduct = useSelector((state) => state.cart.products);

  // cart
  const cart = useSelector((state) => state.cart);

  // remove cart
  const dispatch = useDispatch();
  const handleRemove = (_id) => {
    dispatch(removeproduct(_id));
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
              {/* if the user does not search fro items and does not select item according yo category then this function will get categroy data without searching */}
              <div className="container-fuid cart">
                <div className="text-center cartTitle">Your Collection</div>
                <div className="row mt-1">
                  {/* cart container */}

                  <div className="col-md-9">
                    {cartProduct ? (
                      <>
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
                                  {/* Quiantity: <span>{item._id}</span> */}
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
                                price : <span>$ {item.price}</span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        <div className="containerEmpty">
                          <h1>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Amet possimus recusandae harum voluptates
                            magni sequi dolores doloribus laborum modi tempora
                            exercitationem adipisci doloremque dolorum eveniet,
                            necessitatibus delectus maxime veritatis provident
                            rem! Repudiandae consectetur nam nulla, minus
                            laborum aut tenetur temporibus nobis reiciendis
                            eligendi perferendis placeat commodi accusamus
                            recusandae accusantium eum itaque ea quasi
                            aspernatur a similique quas quis? Error inventore
                            enim odit provident doloremque explicabo atque
                            eveniet facere quod, non magni, molestiae iure id,
                            commodi aperiam itaque quae. Laudantium nisi
                            cupiditate iure placeat quaerat dolorum quas neque
                            cum tempora doloremque! Veritatis illo eligendi
                            eveniet laudantium doloribus accusamus, alias
                            repellendus culpa?
                          </h1>
                        </div>
                      </>
                    )}
                  </div>

                  {/* check box */}

                  <>
                    {/* if the user is login is not he/she  need to do login first */}
                    <div className="col-md-3 checkBoxWithoutLogin">
                      <div className="containerInfo">
                        <p>
                          Subtotal ({cart.quantity} item) :
                          <span>$ {cart.total}.00</span>
                          <br />
                          {/* when use is login then  user will directly go to payment method */}
                          {user ? (
                            <>
                              <Link to="/payment">
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
          )}
        </>
      )}

      {/* footer */}
      <Footer />
    </>
  );
};

export default Cart;
