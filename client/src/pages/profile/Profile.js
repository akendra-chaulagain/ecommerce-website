import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser.others);

  return (
    <>
      <div className="comtainer profile">
        <div className="row">
          <h3 className="text-center ">Update Your Profile</h3>
          <div className="profileWrapper">
            <div className="col-md-6 updateProfileContainer">
              <div className="profileImg text-center">
                <img
                  src="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
