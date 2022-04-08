import React from "react";
import { Link } from "react-router-dom";
import "./ChangePassword.css";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";
import Footer from "../../components/footer/Footer";
import { useSelector } from "react-redux";
// import axios from "axios";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast, Zoom } from "react-toastify";

const ChangePassword = () => {
  const user = useSelector((state) => state.user.currentUser);

  //  update user paSSWORD
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (newPassword === password) {
      await axios.put("/users/" + user._id, {
        password,
      });
      toast.success("Password changed!", {
        position: "top-center",
        autoClose: false,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
      window.location.reload("/changePassword");
    } else {
      toast.error("Password does not match!", {
        position: "top-center",
        autoClose: false,
        transition: Zoom,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
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
                  placeholder="enter new password"
                />
              </div>
              {/* confirm number */}
              <div className="inputBoxs">
                <label htmlFor="">Confirm password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="confirm  password"
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
      <ToastContainer />
      {/* footer */}
      <Footer />
    </>
  );
};

export default ChangePassword;
