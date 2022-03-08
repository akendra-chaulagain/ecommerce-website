import React from "react";
import "./Navbar.css";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";

// navbar
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  // use selector from react redux
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarContainer">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            All In One
          </Link>
          {/* search box */}
          <input type="text" placeholder="search" />
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
              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link " to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Sign In
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                {/* <Link className="nav-link " to="/register">logOut</Link> */}
                {/* <a className="nav-link" onClick={handleLogout}>LogOut</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order">
                  Order
                </Link>
              </li>

              {/* cart Icon */}
              <li className="nav-item">
                <Link to="/cart" className=" nav-link notification">
                  <span>
                    <Cart />
                  </span>
                  <span className="badge">{quantity}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
