import React from "react";
import "./Checkout.css";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../../RequestMethod";

const Checkout = () => {
  const navigate = useNavigate();
  // stripe public key import from the .env file
  const key = process.env.REACT_APP_STRIPE;

  // cart
  const cart = useSelector((state) => state.cart);
  // /for total ammount
  const cartProduct = useSelector((state) => state.cart.products);
  const subTotal = cartProduct.reduce(
    (x, item) => x + item.price * item.quantity,
    0
  );

  // for tax ,shipping price
  const taxPrice = subTotal * 0.12;
  const shippingPrice = subTotal > 1000 ? 0 : 5;
  const totalPrice = subTotal + taxPrice + shippingPrice;

  // user
  const user = useSelector((state) => state.user.currentUser);

  // token for stripe
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  // useffect for stripe token
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await userRequest.post("/stripe/payment", {
          token: stripeToken,
          amount: totalPrice * 10,
          cart,
          user,
        });
        navigate("/success-payment");

        // setdata(res.data);
      } catch (error) {
        console.log("unable to payment" + error);
      }
    };
    makeRequest();
  }, [stripeToken, totalPrice, user, cart, navigate]);

  return (
    <>
      <div className="container-fluid checkBox">
        <div className="row wrappercheckBox">
          <div className="col-md-6 ">
            <h3>Order Summery</h3>
            <div className="checkBoxContainer">
              <div className="checkBoxInfo">
                <p>Subtotal</p>
                <p>Tax </p>
                <p>Shipping </p>
                <span>Total</span>
              </div>
              <div className="checkBoxInfo">
                <p>${subTotal}</p>
                {/* shipping cost */}
                <p>${taxPrice}</p>
                <p>$ {shippingPrice}</p>
                <span>{totalPrice}</span>
              </div>
            </div>
            <div className="checkOutButton">
              {/* strip container  for payment method*/}
              <StripeCheckout
                name="All In One"
                image="https://img.freepik.com/free-vector/hand-holding-shopping-bags_23-2147491522.jpg?size=338&ext=jpg"
                shippingAddress
                description={`Yor  amount is ${totalPrice}`}
                amount={totalPrice * 100}
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
