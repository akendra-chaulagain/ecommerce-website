import React from "react";
import Announcementt from "../../components/announcenemt/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      {/* announcement */}
      <Announcementt />
      <Navbar />
      <div className="container-fuid cart">
        <div className="text-center cartTitle">Your Collection</div>

        <div className="row mt-1">
          <div className="col-md-9">
            <div className="row leftSideCart">
              <div className="col-4">
                <img
                  className="img-fluid"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                  alt=""
                />
              </div>
              <div className="col-8 leftSideproductInfo">
                <div className="leftsideproductInfodata">
                  <p>
                    Product: <span>Cloth</span>
                  </p>
                  <p>
                    Color :<span>black</span>
                  </p>
                  <p>
                    Size: <span>XXL</span>
                  </p>
                </div> 

                {/* <div className="righrSideProductInfoPrice">
                  <div className="increaseAnddecrease">
                    <button>-</button>
                    <span className="number">3</span>
                    <button>+</button>
                    <p>$ 50</p>
                  </div>
                </div> */}
              </div>
              <hr />
            </div>
          </div>

          {/* check box */}
          <div className="col-md-3 checkBox">
            <h3>Order Summery</h3>
            <div className="checkBoxContainer">
              <div className="checkBoxInfo">
                <p>Subtotal</p>
                <p>Estimated Shipping</p>
                <p>Shipping Discount</p>
                <span>Total</span>
              </div>
              <div className="checkBoxInfo">
                <p>$800</p>
                <p>$ 10.66</p>
                <p>$ -59.0</p>
                <span>$ 800</span>
              </div>
            </div>
            <div className="checkOutButton">
              {/* strip container  for payment method*/}
              {/* <StripeCheckout
                                name='All In One'
                                image='https://img.freepik.com/free-vector/hand-holding-shopping-bags_23-2147491522.jpg?size=338&ext=jpg'
                                billingAddress
                                shippingAddress
                                description={`Yor  amount is ${cart.total}`}
                                amount={cart.total * 100}
                                token={onToken}
                                stripeKey={key}

                            > */}
              <button>CHECKOUT NOW</button>
              {/* </StripeCheckout> */}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Cart;
