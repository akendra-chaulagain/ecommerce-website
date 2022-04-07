import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginregisterFooter from "../../components/loginRegisterFooter/LoginregisterFooter";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apicalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginTextField from "../../components/LoginTextField/LoginTextField";
import { ToastContainer } from "react-toastify";

const Login = () => {
  //  useDispatch hook is used for login (redux)
  const { isFetching } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // yup validation is used
  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
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
          //
        }}
      >
        <Form>
          <div className=" loginPage">
            <div className="loginFrom">
              <h2 className="loginTitle">All In One</h2>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox">
                  <LoginTextField
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="ak@gmail.com"
                  />
                </div>

                <div className="inputBox">
                  <LoginTextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="password"
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
          {/* this container is used for tostify */}
          <ToastContainer limit={1} />
          {/* login and register footer */}
          <LoginregisterFooter />
        </Form>
      </Formik>
    </>
  );
};

export default Login;
