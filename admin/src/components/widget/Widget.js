import React from "react";
import "./Widget.css";
import Category from "@material-ui/icons/CategoryOutlined";
import Person from "@material-ui/icons/Person";
import Shopping from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <div className="container-fluid widget">
      <div className="row">
        <div className="col-4 mt-2 leftWidge">
          <Category />
          <h5>Total Products</h5>
          {/* <p>{allProduct.length}</p> */}
          <div className="seeAlluser">
            <Link to="/product">
              <p>see all products</p>
            </Link>
          </div>
        </div>
        <div className="col-4 mt-2 middletWidget">
          <Person />
          <h5>Total Users</h5>
          {/* <p>{allUser.length}</p> */}
          <div className="seeAlluser">
            <Link to="/list">
              <p>see all users</p>
            </Link>
          </div>
        </div>
        <div className="col-4 mt-2 rightWidget">
          <Shopping />
          <h5>Total Orders</h5>
          {/* <p>{order.length}</p> */}
          <div className="seeAlluser">
            <Link to="/order">
              <p>see all orders</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
