import React from "react";
import { useSelector } from "react-redux";
import Announcementt from "../../components/announcenemt/Announcement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  // get cart data
  const cart = useSelector((state) => state.cart.products);

  return (
    <>
      {/* announcement */}
      <Announcementt />
      <Navbar />
      <div className="container-fuid cart">
        <div className="text-center cartTitle">Your Collection</div>
        <div className="row mt-1">
          {/* cart container */}
          <div className="col-md-9">
            {cart?.map((item, id) => (
              <div className="row leftSideCart" key={id}>
                <div className="col-3">
                  <img className="img-fluid" src={item.img} alt="" />
                </div>
                <div className="col-9 leftSideproductInfo">
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
                  </div>
                </div>
                <div className="totalPrice text-end">
                  <p>
                    Total : <span>$ {item.price}</span>
                  </p>
                </div>
                {/* product Price */}

                <hr />
              </div>
            ))}
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
