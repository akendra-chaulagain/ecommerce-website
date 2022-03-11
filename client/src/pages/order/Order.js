import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Order.css";
import { Link } from "react-router-dom";

const Order = () => {
  // get all order
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get("/orders");
        setOrder(res.data);
      } catch (error) {}
    };
    getOrders();
  }, []);

  return (
    <>
      {/* order page */}
      <div className="container orderContainer">
        <div className="row">
          <h2 className="text-center mt-5">Your Orders</h2>
          {/* order */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">OrderId</th>
                <th scope="col">Order Date</th>
                <th scope="col">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((item, key) => (
                <tr key={key}>
                  <td>{item._id}</td>
                  <td>{new Date(item.createdAt).toDateString()}</td>
                  <td>
                    {item.amount}
                    <Link to={`${item._id}`}>
                      <button>view </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Order;
