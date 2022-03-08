import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Product from "./pages/products/Product";
import SingleProductPage from "./pages/singleProductPage/SingleProductPage";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Order from "./pages/order/Order";
import Checkout from "./pages/checkoutBox/Checkout";

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
        {/* checkOut page */}
        <Route path="/payment" element={<Checkout />} />
        {/* order page */}
        <Route
          path="/order"
          element={user ? <Order /> : <Navigate to="/login" />}
        />
        {/* register page */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        {/* login page */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </>
  );
};

export default App;
