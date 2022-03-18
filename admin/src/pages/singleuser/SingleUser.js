import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./SingleUser.css";

const SingleUser = () => {
  return (
    <>
      <div className="singleuser">
        <Sidebar />

        <div className="container-fluid singleuserContainer">
          <div className="row ">
            <h3 className="text-center">User Information</h3>
            <div className="wrapperuserBox">
              <div className="userInfoBox">
                <p>
                  UserId : <span>123434555456748543</span>
                </p>
                <p>
                  Full Name : <span>akendra chaulagain</span>
                </p>
                <p>
                  Email : <span>akendra@gmail.com</span>
                </p>
                <p>
                  Contact no: : <span>989657658</span>
                </p>
                {/* delete  user data button*/}

                <button className="buttonBelete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
