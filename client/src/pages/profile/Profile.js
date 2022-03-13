import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
// import Arrow from "@material-ui/icons/Arrow"

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser.others);
  console.log(user);
  return (
    <>
      <div className="homepageLink">
        <Link className="link" to="/">
          <span>Back to homepage</span>
        </Link>
      </div>

      <div className="container profile">
        <div className="row">
          <h3 className="text-center ">Update Your Profile</h3>
          <form className="profileWrapper">
            <div className="col-md-6 updateProfileContainer">
              {/* email */}
              <div className="inputBoxs mt-4">
                <label htmlFor="">Enter your new email</label>
                <input type="text" />
              </div>
              {/* username */}
              <div className="inputBoxs">
                <label htmlFor="">Enter your new userName</label>
                <input type="text" />
              </div>
              {/* contact number */}
              <div className="inputBoxs">
                <label htmlFor="">Enter your new contact no</label>
                <input type="text" />
              </div>
              {/* submmit buttom */}
              <div className="inputBoxs">
                <button>update</button>
              </div>
              {/* change password */}
              <div className="changePassword">
                <span> Change password</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
