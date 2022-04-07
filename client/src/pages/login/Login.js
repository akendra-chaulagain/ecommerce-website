import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginregisterFooter from "../../components/loginRegisterFooter/LoginregisterFooter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apicalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginTextField from "../../components/LoginTextField/LoginTextField";

const Login = () => {
  // usestate for email and password
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //  useDispatch hook is used for login (redux)
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //   handleLogin button
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { email, password });
  // };

  // yup
  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be atleat 6 characters")
      .required("Password is required!"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          login(dispatch, values);
        }}
      >
        <Form>
          <div className=" loginPage">
            <div className="loginFrom">
              <h2 className="loginTitle">All In One</h2>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox">
                  <LoginTextField label="Email" name="email" type="text" />
                </div>

                <div className="inputBox">
                  <LoginTextField
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="inputBox">
                  {/* login button */}
                  <button disabled={isFetching}>Continue</button>
                </div>
              </div>
              <p>
                Don't have an account ?{/* render to login page when click */}
                <Link className="link" to="/register">
                  <span>SIGN UP</span>
                </Link>
              </p>
              <div className="terms">
                By creating an account, you agree to All In One's Conditions of
                Use and Privacy Notice.
              </div>
            </div>
          </div>
          {/* login and register footer */}
          <LoginregisterFooter />
        </Form>
      </Formik>
    </>
  );
};

export default Login;
