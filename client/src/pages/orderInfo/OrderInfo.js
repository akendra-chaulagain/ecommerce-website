import React from "react";
import "./OrderInfo.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";
import { userRequest } from "../../RequestMethod";

const OrderInfo = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //   get order according to id
  const [order, setOrder] = useState({});
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("/orders/find/" + path);
        setOrder(res.data);
      } catch (error) {}
    };
    getOrders();
  }, [path]);

  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/order">
          <span>
            <Arrow style={{ fontSize: 30 }} />
          </span>
        </Link>
      </div>
      <div className="container OrderInfo">
        <div className="row ">
          <h1>Order Information</h1>
          <div className="col-6 mt-4">
            <h3>Order Items</h3>
            {/* map function fro order items */}
            {order.orderItems?.map((item, key) => (
              <div key={key}>
                {item.products.map((subItem, key) => (
                  <div key={key}>
                    <img src={subItem.img} alt="" />
                    {subItem.name}
                    <hr />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* address */}
          <div className="col-3 mt-4">
            <h3>Information</h3>
            <p>Email :{order.email}</p>
            <p>Contact no :{order.contact}</p>
            <p>Username : {order.username}</p>
          </div>
          <div className="col-3 mt-4">
            <h3>Total</h3>${order.amount}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderInfo;
