import React from "react";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/navbar/Topbar";
import List from "./pages/list/List";
import SingleUser from "./pages/singleuser/SingleUser";
import Allproduct from "./pages/product/Allproduct";
import Update from "./pages/updateProduct/Update";
import NewProduct from "./pages/new/NewProduct";
import Order from "./pages/order/Order";
import ViewOrder from "./pages/View/ViewOrder";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Router>
        {user && (
          <>
            <Topbar />
          </>
        )}
        <Routes>
          {/* home page */}
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          {/* user list page */}
          <Route
            path="/list"
            element={user ? <List /> : <Navigate to="/login" />}
          />
          {/* get user by id */}
          <Route
            path="list/:id"
            element={user ? <SingleUser /> : <Navigate to="/login" />}
          />
          {/* get all product */}
          <Route
            path="/product"
            element={user ? <Allproduct /> : <Navigate to="/login" />}
          />
          {/* for creating new product */}
          <Route
            path="/newProduct"
            element={user ? <NewProduct /> : <Navigate to="/login" />}
          />
          {/* fro update product */}
          <Route
            path="/product/:id"
            element={user ? <Update /> : <Navigate to="/login" />}
          />
          {/* get all order */}
          <Route
            path="/order"
            element={user ? <Order /> : <Navigate to="/login" />}
          />
          {/* view single order */}
          <Route
            path="order/:id"
            element={user ? <ViewOrder /> : <Navigate to="/login" />}
          />
        </Routes>
        {/* login container */}
        <Routes>
          {/* view single order */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
