import React from "react";
import "./Widget.css";
import Category from "@material-ui/icons/CategoryOutlined";
import Person from "@material-ui/icons/Person";
import Shopping from "@material-ui/icons/ShoppingBasketOutlined";

const Widget = () => {
  return (
    <div className="container-fluid widget">
      <div className="row">
        <div className="col-4 mt-2 leftWidge">
          <Category />
          <h5>Total Products</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>see all products</p>
          </div>
        </div>
        <div className="col-4 mt-2 middletWidget">
          <Person />
          <h5>Total Users</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>see all users</p>
          </div>
        </div>
        <div className="col-4 mt-2 rightWidget">
          <Shopping />
          <h5>Total Orders</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>see all orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
