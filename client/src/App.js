import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

const App = () => {
  return (
    <>
      <Routes>
        {/* home page */}
        <Route exact path="/" element={<Home />} />
        {/* productList */}
        {/* <Route path="/products/:cetegory" element={<ProductList />} /> */}
        {/* single productList page */}
        {/* <Route path="/product/:id" element={<SingleProductPage />} /> */}
        {/* cart page */}
        {/* <Route path="/cart" element={user ? <Cart /> : <Home />} /> */}
        {/* cart page */}
        {/* <Route path="/success" element={<Success />} /> */}
        {/* register page */}
        <Route path="/register" element={<Register />} />
        {/* login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App