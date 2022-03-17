import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
    // const user  = useSelector((state) => state.user.isAdmin);
    // console.log(user.others.isAdmin);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <>
      <div className="login">
        <form className="loginform">
          {/* email */}
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          {/* password */}
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
