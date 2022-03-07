import React from "react";
import "./Footer.css";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Twitter from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapper">
          <div className="left">
            <h3>Get to Know Us</h3>
            <span>Home</span>
            <br />
            <span>About All In One</span>
            <br />
            <span>Blog</span>
            <br />
            <span>Contact</span>
            <br />
            <span>Policy</span>
          </div>

          <div className="middle">
            <h3>Payment Methods</h3>
            <span>Credit Card</span>
            <br />
            <span>E-sewa</span>
            <br />
            <span>Phone Pay</span>
            <br />
            <span>G-Pay</span>
            <br />
            <span>PayPal</span>
          </div>

          <div className="right">
            <h3>Contact Us On</h3>
            <span>
              <Facebook style={{ marginRight: 10, color: "blue" }} />
              Facebook
            </span>
            <br />
            <span>
              <Instagram style={{ marginRight: 10, color: "red" }} /> Instagram
            </span>
            <br />
            <span>
              <Twitter style={{ marginRight: 10, color: "lightBlue" }} />{" "}
              Twitter
            </span>
            <br />
            <span>
              <WhatsApp style={{ marginRight: 10, color: "green" }} />
              WhatsApp
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
