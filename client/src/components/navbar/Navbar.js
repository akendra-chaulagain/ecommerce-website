import React from "react";
import "./Navbar.css";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import { useDispatch, useSelector } from "react-redux";
import SemiNav from "../semiNav/Saminav";
import {
  logOutfailure,
  logOutStart,
  logOutSuccess,
} from "../../redux/userRedux";
import { ToastContainer, toast, Zoom } from "react-toastify";

// navbar
const Navbar = ({ setSearchProduct, setCategoryData }) => {
  const user = useSelector((state) => state.user.currentUser);
  // use selector from react redux
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

  const handlLogout = async () => {
    dispatch(logOutStart());
    try {
      dispatch(logOutSuccess());
      toast.success(" Logout Success!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      dispatch(logOutfailure());
      toast.error(" Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            All In One
          </Link>
          {/* search box */}
          <input
            type="text"
            placeholder="search your product"
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          {/* cart */}
          <div>
            <Link to="/cart" className=" nav-link notification">
              <span>
                <Cart />
              </span>
              <span className="badge">{quantity}</span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <Menu style={{ fontSize: 20 }} />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!user ? (
                <>
                  {/* register */}
                  <li className="nav-item">
                    <Link className="nav-link " to="/register">
                      Register
                    </Link>
                  </li>
                  {/* login */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Sign In
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* order page */}
                  <li className="nav-item">
                    <Link to="/order" className="nav-link">
                      Order
                    </Link>
                  </li>
                  {/* profile */}
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                  {/* logout */}
                  <li className="nav-item">
                    <span className="nav-link" onClick={handlLogout}>
                      Logout
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer />
      {/* samiNavbar  import from component folder*/}
      <SemiNav setCategoryData={setCategoryData} />
    </>
  );
};

export default Navbar;
