import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Product from "./pages/products/Product";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Order from "./pages/order/Order";
import Checkout from "./pages/checkoutBox/Checkout";
import Success from "./pages/success/Success";
import OrderInfo from "./pages/orderInfo/OrderInfo";
import Error from "./pages/error/Error";
import AllProduct from "./pages/allProducts/AllProduct";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/changepassword/ChangePassword";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Routes>
        {/* home page */}
        <Route exact path="/" element={<Home />} />
        {/* productList */}
        <Route path="/products/:cetegory/:id" element={<Product />} />
        {/* single productList page */}
        <Route path="/products/single/:id" element={<SingleProductPage />} />
        {/* cart page */}
        <Route path="/cart" element={<Cart />} />
        {/* profile */}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />
        {/* success page */}
        <Route
          path="/success-payment"
          element={user ? <Success /> : <Navigate to="/login" />}
        />
        {/* checkOut page */}
        <Route
          path="/payment"
          element={user ? <Checkout /> : <Navigate to="/login" />}
        />
        {/* single order page */}
        <Route
          path="/order/:id"
          element={user ? <OrderInfo /> : <Navigate to="/" />}
        />
        {/* order page */}
        <Route
          path="/order"
          element={user ? <Order /> : <Navigate to="/login" />}
        />
        {/* all product page */}
        <Route path="/allproducts" element={<AllProduct />} />
        {/* register page */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        {/* login page */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {/* change password page */}
        <Route
          path="/profile/changePassword"
          element={user ? <ChangePassword /> : <Navigate to="/" />}
        />

        {/* error page import from error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
