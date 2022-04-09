import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ViewOrder.css";
import axios from "axios";

const ViewOrder = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  // get product accroding to id
  const [getOrderProduct, setgetOrderProduct] = useState([]);
  const [getProductAddress, setgetProductAddress] = useState({});
  const [total, setTotal] = useState("");
  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await axios.get("/orders/find/" + path);
        setgetOrderProduct(res.data.orderItems[0].products);
        setgetProductAddress(res.data.shippingAddress);
        setTotal(res.data.amount);
      } catch (error) {
        console.log("unable to get order " + error);
      }
    };
    getProductById();
  }, [path]);

  return (
    <>
      <div className="viewOrder">
        <Sidebar />

        <div className="container-fluid viewOrderContainer">
          <div className="row ">
            <h3 className="text-center">Order Information</h3>
            <div className="wrapperOrderBox">
              {/* address */}
              <div className="OrderInfoBoxAddress">
                <h3>Shipping Address</h3>
                <p>
                  City : <span>{getProductAddress.city}</span>
                </p>
                <p>
                  Country : <span>{getProductAddress.country}</span>
                </p>
                <p>
                  Pin : <span>{getProductAddress.pin}</span>
                </p>
                <p>
                  Street: : <span>{getProductAddress.street}</span>
                </p>
                <div className="TotalAmount">
                  <p>Total Amount :${total}</p>
                </div>
              </div>
              {/* order's product  */}
              <div className="OrderInfoBoxProduct">
                {getOrderProduct.map((item, key) => (
                  <div className="orderProductWrapper" key={key}>
                    {/* order product ing */}
                    <div className="orderImg">
                      <img src={item.img} alt="" />
                    </div>
                    {/* order product title */}
                    <div className="orderProductTitle">{item.name}</div>
                    {/* price */}
                    <p>
                      Price : <span>${item.price}</span>
                    </p>
                    {/* quantity */}
                    <p>
                      Quantity : <span>{item.quantity}</span>
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrder;
