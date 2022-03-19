import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ChangePassword.css";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
// import axios from "axios";
import { useState } from "react";
import { userRequest } from "../../RequestMethod";

const ChangePassword = () => {
  const nagivate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  //  update user paSSWORD
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword === password) {
      await userRequest.put("/users/" + user._id, {
        password,
      });
      alert("password changed");
      nagivate("/");
    } else {
      alert("password does not match");
    }
  };

  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/profile">
          <span>
            <Arrow style={{ fontSize: 30 }} />
          </span>
        </Link>
      </div>
      <div className="container changePasswordContainer">
        <div className="row">
          <h3 className="text-center ">Update Your Password</h3>
          <form className="passwordWrapper">
            <div className="col-md-6 updatePasswordContainer">
              {/*new password */}
              <div className="inputBoxs mt-3">
                <label htmlFor="">Enter your new password</label>
                <input
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              {/* confirm number */}
              <div className="inputBoxs">
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* submmit buttom */}
              <div className="inputBoxs">
                <button onClick={handlePasswordUpdate}>submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default ChangePassword;
