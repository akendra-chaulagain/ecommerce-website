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
import Allproduct from "./pages/product/Allproduct";
import Update from "./pages/updateProduct/Update";
import NewProduct from "./pages/new/NewProduct";
import Order from "./pages/order/Order";
import ViewOrder from "./pages/View/ViewOrder";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Category from "./pages/createCategoty/Category";
import CategoryList from "./pages/categoryList/CategoryList";

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
            path="/order/:id"
            element={user ? <ViewOrder /> : <Navigate to="/login" />}
          />
          {/* category */}
          <Route
            path="/category"
            element={user ? <CategoryList /> : <Navigate to="/login" />}
          />
          {/*new category */}
          <Route
            path="/newcategory"
            element={user ? <Category /> : <Navigate to="/login" />}
          />
        </Routes>
        {/* login container */}
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
