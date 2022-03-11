import React from "react";
import Done from "@material-ui/icons/DoneOutlined";
import "./Success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <div className="container-fluid success">
        <div className="row ">
          <div className="successWrapper">
            <div className=" successInfo">
              <Done style={{ fontSize: 60, fontWeight: 600, color: "gray" }} />
              <h1>Payment Success</h1>
              {/* order page */}
              <Link to="/order">
                <button>view order</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
