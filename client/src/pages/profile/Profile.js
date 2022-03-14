import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser.others);
  

  // update user expect password
  const [email, setEmail] = useState(user.email);
  const [username, setName] = useState(user.username);
  const [number, setNumber] = useState(user.number);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/users/" + user._id, {
        email,
        username,
        number,
      });
      alert("update success");
      navigate("/");
    } catch (error) {
      alert("unable to update");
    }
  };
  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/">
          <span>
            <Arrow style={{ fontSize: 30 }} />
          </span>
        </Link>
      </div>

      <div className="container profile">
        <div className="row">
          <h3 className="text-center ">Update Your Profile</h3>
          <form className="profileWrapper">
            <div className="col-md-6 updateProfileContainer">
              {/* email */}
              <div className="inputBoxs mt-4">
                <label>Email</label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="akendra@gmail.com"
                />
              </div>
              {/* username */}
              <div className="inputBoxs">
                <label>UserName</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="nabil"
                />
              </div>
              {/* contact number */}
              <div className="inputBoxs">
                <label>Contact no</label>
                <input
                  type="text"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="98677556"
                />
              </div>
              {/* submmit buttom */}
              <div className="inputBoxs">
                <button onClick={handleUpdate}>update</button>
              </div>
              {/* change password */}
              <div className="changePassword">
                <Link to="changePassword">
                  <span> Change password</span>
                </Link>
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

export default Profile;
