import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";
import { userRequest } from "../../RequestMethod";

const Order = () => {
  const user = useSelector((state) => state.user.currentUser);

  // get all order on an individual only
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.post(`/orders/getusorder`, {
          userFullId: user._id,
        });
        setOrder(res.data);
      } catch (error) {
        console.log("unable to get order");
      }
    };
    getOrders();
  }, [user]);
  console.log(order);

  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/">
          <span>
            <Arrow style={{ fontSize: 30 }} />
          </span>
        </Link>
      </div>
      {/* order page */}
      <div className="container orderContainer">
        <div className="row">
          <h2 className="text-center mt-3">Your Orders</h2>
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
