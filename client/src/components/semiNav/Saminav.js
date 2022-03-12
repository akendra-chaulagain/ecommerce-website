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
              {/* all products */}
              <li className="nav-itemLi">
                <Link className="nav-itemLi" to="/allproducts">
                  All
                </Link>
              </li>
              {}
              <li className="nav-itemLi">
                <select onChange={(e) => setCategoryData(e.target.value)}>
                  <option value="electronic">Electronic</option>
                  <option value="computer">Computer</option>
                  <option value="fitness">Fitness</option>
                  <option value="cloth">Cloth</option>
                  <option value="book">Books</option>
                  <option value="cosmetic">cosmetic</option>
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
