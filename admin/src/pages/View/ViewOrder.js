import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ViewOrder.css";

const ViewOrder = () => {
  return (
    <>
      <div className="viewOrder">
        <Sidebar />

        <div className="container-fluid viewOrderContainer">
          <div className="row ">
            <h3 className="text-center">User Information</h3>
            <div className="wrapperOrderBox">
              <div className="OrderInfoBox">
                <p>
                  OrderId : <span>123434555456748543</span>
                </p>
                <p>
                  Product : <span>akendra chaulagain</span>
                </p>
                <p>
                  Email : <span>akendra@gmail.com</span>
                </p>
                <p>
                  Amount: : <span>989657658</span>
                </p>
                <p>
                  Status: : <span>pending</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrder;
