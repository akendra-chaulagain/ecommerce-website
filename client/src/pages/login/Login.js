import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginregisterFooter from "../../components/loginRegisterFooter/LoginregisterFooter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apicalls";

const Login = () => {
  // usestate for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //  useDispatch hook is used for login (redux)
  const { error, isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //   handleLogin button
  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
      <div className=" loginPage">
        <form className="loginFrom">
          <h2 className="loginTitle">All In One</h2>
          <div className=" LoginFormContainer">
            <h4>Sign-In</h4>
            {/* email input filed */}
            <div className="inputBox">
              <label>Email</label>
              <br />
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* password input filed */}
            <div className="inputBox">
              <label>Password</label>
              <br />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputBox">
              {/* login button */}
              <button onClick={handleLogin} disabled={isFetching}>
                Continue
              </button>
              {error && <span>Something went wrong!</span>}
            </div>
          </div>
          <p>
            Don't have an account ?{/* render to login page when click */}
            <Link className="link" to="/register">
              <span>SIGN UP</span>
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

export default Login;
