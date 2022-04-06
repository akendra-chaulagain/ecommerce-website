import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const { error, isFetching } = useSelector((state) => state.user);

  // usestate for form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useState for submit
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // when login button is clicked this function will run
  const handleLogin = (e) => {
    e.preventDefault();
    setFormErrors(validate(login(dispatch, { email, password })));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [email, password, formErrors, isSubmit]);

  // validation
  const validate = (values) => {
    const errors = {};
    // const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <>
      <div className="login">
        <form className="loginform">
          {/* email */}
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <span>{formErrors.email}</span>
          {/* password */}
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>{formErrors.password}</span>
          <button onClick={handleLogin} disabled={isFetching}>
            Log In
          </button>
          {/* {error && <span className="error">Something went wrong!</span>} */}
        </form>
      </div>
    </>
  );
};

export default Login;
