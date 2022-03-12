import React from "react";
import "./Saminav.css";
import { Link } from "react-router-dom";

const SemiNav = () => {
  return (
    <>
      <nav className="navbar  SaminavbarContainer">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <Link to="/allproducts">
              <li className="nav-item">All products</li>
            </Link>
          </ul>
          {/* search box */}
        </div>
      </nav>
    </>
  );
};

export default SemiNav;
