import React from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import LoginregisterFooter from "../../components/loginRegisterFooter/LoginregisterFooter";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // register user
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
        number,
      });
      alert("register successfull");
      navigate("/login");
    } catch (error) {
      alert("unable to regsister");
    }
  };

  return (
    <>
      <div className=" registerPage">
        <form className="registerFrom">
          <h2 className="registerTitle">All In One</h2>
          <div className=" LoginFormContainer">
            <h4>Create An Account</h4>
            {/* name */}
            <div className="inputBox">
              <label>Your Name</label>
              <br />
              <input
                type="text"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* email */}
            <div className="inputBox">
              <label>Email</label>
              <br />
              <input
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* contact number */}
            <div className="inputBox">
              <label>Phone Number</label>
              <br />
              <input
                type="number"
                autoComplete="off"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            {/* password */}
            <div className="inputBox">
              <label>Password</label>
              <br />
              <input
                type="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <button onClick={handleRegister}>Continue</button>
            </div>
          </div>
          <p>
            Already have an account ?{/* render to login page when click */}
            <Link className="link" to="/login">
              <span>SIGN IN</span>
            </Link>
          </p>
          <div className="terms">
            By creating an account, you agree to All In One's Conditions of Use
            and Privacy Notice.
          </div>
        </form>
      </div>
      {/* login and register footer */}
      <LoginregisterFooter />
    </>
  );
};

export default Register;
