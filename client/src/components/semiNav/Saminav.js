import React from "react";
import "./Saminav.css";
import { Link } from "react-router-dom";

const SemiNav = ({ setCategoryData }) => {
  return (
    <>
      <div className="container-fluid SaminavbarContainer">
        <div className="row">
          <div className="col-12">
            <ul className=" navBarItems">
              {/* home */}
              <li className="nav-itemLi">
                <Link className="nav-itemLi" to="/">
                  Home
                </Link>
              </li>
              {/* all products */}
              <li className="nav-itemLi">
                <Link className="nav-itemLi" to="/allproducts">
                  All products
                </Link>
              </li>
              <li className="nav-itemLi">
                <select onChange={(e) => setCategoryData(e.target.value)}>
                  <option>Select</option>
                  <option value="electronic">Electronic</option>
                  <option value="laptop">Computer</option>
                  <option value="fitness">Fitness</option>
                  <option value="cloth">Cloth</option>
                  <option value="book">Books</option>
                  <option value="cosmetic">Cosmetic</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiNav;
