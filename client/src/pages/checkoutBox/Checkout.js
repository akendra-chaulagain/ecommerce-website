import React from "react";
import "./Checkout.css";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../../components/footer/Footer";

const Checkout = () => {
  // stripe public key import from the .env file
  const key = process.env.REACT_APP_STRIPE;

  // cart
  const cart = useSelector((state) => state.cart);

  // user
  const user = useSelector((state) => state.user.currentUser);

  // token for stripe
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  // useffect for stripe token
  const [data, setdata] = useState({});
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/stripe/payment", {
          token: stripeToken.id,
          amount: cart.total * 10,
          cart,
          user,
        });
        alert("success");
        setdata(res.data);
      } catch (error) {
        console.log("unable to payment" + error);
      }
    };
    makeRequest();
  }, [stripeToken, cart.total, user, cart]);
  console.log(data);

  return (
    <>
      <div className="container-fluid checkBox">
        <div className="row wrappercheckBox">
          <div className="col-md-6 ">
            <h3>Order Summery</h3>
            <div className="checkBoxContainer">
              <div className="checkBoxInfo">
                <p>Subtotal</p>
                <p>Estimated Shipping</p>
                <p>Shipping Discount</p>
                <span>Total</span>
              </div>
              <div className="checkBoxInfo">
                <p>${cart.total}</p>
                {/* shipping cost */}
                <p>$ 10.66</p>
                <p>$ -59.0</p>
                <span>$ 800</span>
              </div>
            </div>
            <div className="checkOutButton">
              {/* strip container  for payment method*/}
              <StripeCheckout
                name="All In One"
                image="https://img.freepik.com/free-vector/hand-holding-shopping-bags_23-2147491522.jpg?size=338&ext=jpg"
                shippingAddress
                description={`Yor  amount is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={key}
              >
                <button>CHECKOUT NOW</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Checkout;
