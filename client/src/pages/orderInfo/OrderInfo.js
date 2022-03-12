import React from "react";
import "./OrderInfo.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderInfo = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  //   get order according to id
  const [order, setOrder] = useState({});
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/orders/find/" + path);
        setOrder(res.data);
      } catch (error) {}
    };
    getOrders();
  }, [path]);

  // delete order
  const handleDelete = async () => {
    try {
      await axios.delete("/orders/" + path);
      alert("Success");
      navigate("/");
    } catch (error) {
      alert("unable to deleta");
    }
  };

  return (
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
          <h3>TotalAmount</h3>${order.amount}
        </div>
        <button onClick={handleDelete}>delete </button>
      </div>
    </div>
  );
};

export default OrderInfo;
