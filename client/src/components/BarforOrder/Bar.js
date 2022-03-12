import React from "react";
import { Link } from "react-router-dom";
import "./Bar.css";

const Bar = () => {
  return (
    <>
      <nav className="barContainer">
        <div className="container-fluid">
          <ul>
            <Link to="/">
              <li className="nav-item "> home page </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Bar;
