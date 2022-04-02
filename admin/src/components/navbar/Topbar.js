import React from "react";
import "./Topbar.css";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";

const Topbar = () => {
  return (
    <>
      <div className="container-fluid topbar">
        <div className="row topbar">
          <div className="col-4 left">
            <h3>All In One</h3>
          </div>
          <div className="col-8 right text-end">
            {/* setting button */}
            <Facebook className="facebookicon  icon" />
            <Instagram className="instagramicon icon" />
            <LinkedIn className="linkedinicon icon" />
            <Twitter className="twittericon icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
