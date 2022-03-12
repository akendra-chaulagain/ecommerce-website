import React from "react";
import { Link } from "react-router-dom";
import "./Bar.css";

const Bar = () => {
  return (
    <>
      <nav className="barContainer">
        <div className="container">
          
            <Link to="/">
              <span className="nav-item "> home page </span>
            </Link>
          
        </div>
      </nav>
    </>
  );
};

export default Bar;
